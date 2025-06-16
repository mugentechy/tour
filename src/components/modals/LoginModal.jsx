import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import { FcGoogle } from "react-icons/fc";
import {  useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { authUserAsync } from '../../features/user/userActions'
import { useForm } from 'react-hook-form'
import { toast } from "react-hot-toast";
import { useCallback, useMemo } from "react";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";

function LoginModal() {

  const [open, setOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false);
  const { error } = useSelector((state) => state.user)
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal(); 

    const onSubmit = async (data) => {
    const auth = await dispatch(authUserAsync(data))
    const error = auth?.error?.message
    
    if(!error){
      toast.success('Logged in');
      loginModal.onClose();

    }else{
      toast.error(error);
    }

  }


  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])


  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome back"
        subtitle="Login to your account!"
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}  
        errors={error}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={error}
        required
      />
    </div>
  )

    const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
 
      <div className="
      text-neutral-500 text-center mt-4 font-light">
        <p>First time using Diani Konnect?
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Create an account</span>
        </p>
      </div>
    </div>
  )



  return (
    <>
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
       footer={footerContent}
    />
    </>
  )
}

export default LoginModal
