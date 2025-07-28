// src/components/modals/LoginModal.jsx
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";

import useLoginModal from "../../hooks/useLoginModal";
import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";

function LoginModal({ onSubmit: handleGuestReservation }) {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      handleGuestReservation(data); // Call the handler from parent
      toast.success("Reservation submitted!");
      reset();
      loginModal.onClose();
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Guest Details" subtitle="Please enter your information" />
      <Input id="name" label="Full Name" disabled={isLoading} register={register} errors={errors} required />
      <Input id="email" label="Email Address" disabled={isLoading} register={register} errors={errors} required />
      <Input id="phone" label="Phone Number" disabled={isLoading} register={register} errors={errors} required />
      <Input id="guest_count" label="Number of Guests" type="number" min={1} disabled={isLoading} register={register} errors={errors} required />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Reserve Listing"
      actionLabel="Submit"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}

export default LoginModal;
