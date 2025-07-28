// src/components/listings/ListingClient.jsx
import { useState, useMemo, useEffect, useCallback } from "react";
import { differenceInDays, eachDayOfInterval } from "date-fns";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import ListingHead from "./ListingHead";
import ListingInfo from "./ListingInfo";
import ListingReservation from "./ListingReservation";
import LoginModal from "../modals/LoginModal";
import Container from "../Container";
import { categories } from "../navbar/Categories";
import { amenities } from "../../utils/amenities";
import useLoginModal from "../../hooks/useLoginModal";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

function ListingClient({ listing, currentUser }) {
  const { reservations } = useSelector((state) => state.reservations);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState(initialDateRange);

  const loginModal = useLoginModal();

  const disabledDates = useMemo(() => {
    let dates = [];
    reservations?.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.start_date),
        end: new Date(reservation.end_date),
      });
      dates = [...dates, ...range];
    });
    return dates;
  }, [reservations]);

  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  const amenity = useMemo(() => {
    if (listing?.amenity && typeof listing.amenity === "string") {
      const amenityArray = JSON.parse(listing.amenity);
      return amenityArray.map((item) =>
        amenities.find((a) => a.label === item)
      );
    }
    return [];
  }, [listing]);

  const generateReceipt = (reservation) => {
    const content = `Reservation Receipt\n\nName: ${reservation.name}\nEmail: ${reservation.email}\nPhone: ${reservation.phone}\nGuests: ${reservation.guest_count}\nStart Date: ${reservation.start_date}\nEnd Date: ${reservation.end_date}\nTotal Price: $${reservation.total_price}\nListing: ${listing.title}`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `reservation_receipt_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGuestReservation = (guestData) => {
    setIsLoading(true);
    const newReservation = {
      ...guestData,
      start_date: dateRange.startDate.toLocaleDateString(),
      end_date: dateRange.endDate.toLocaleDateString(),
      total_price: totalPrice,
      listing_id: listing.id,
    };
    try {
      generateReceipt(newReservation);
      toast.success("Reservation confirmed!");
      setDateRange(initialDateRange);
    } catch (error) {
      toast.error("Failed to generate receipt.");
    } finally {
      setIsLoading(false);
    }
  };

  const onCreateReservation = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  useEffect(() => {
    const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);
    if (dayCount > 0 && listing?.price) {
      setTotalPrice(dayCount * listing.price);
    } else {
      setTotalPrice(listing.price);
    }
  }, [dateRange, listing]);

    const images = listing?.images || [];
  const imageSrcList = [listing?.images, ...images?.map(image => image.images)];

  return (
    <>
      <Container>
        <div className="max-w-screen-lg mx-auto pt-28">
          <div className="flex flex-col gap-6">
            <ListingHead
              title={listing.title}
              imageSrc={imageSrcList}
              locationValue={listing.location}
              id={listing.id}
              currentUser={currentUser}
            />
            <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
              <ListingInfo
                user={listing.user}
                category={category}
                amenity={amenity}
                description={listing.info}
                roomCount={listing.bedroom}
                guestCount={listing.guest_count}
                bathroomCount={listing.bathroom}
                locationValue={listing.location}
              />
              <div className="order-first mb-10 md:order-last md:col-span-3">
                <ListingReservation
                  price={listing.price}
                  totalPrice={totalPrice}
                  onChangeDate={(value) => setDateRange(value)}
                  dateRange={dateRange}
                  onSubmit={onCreateReservation}
                  disabled={isLoading}
                  disabledDates={disabledDates}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <LoginModal onSubmit={handleGuestReservation} />
    </>
  );
}

export default ListingClient;
