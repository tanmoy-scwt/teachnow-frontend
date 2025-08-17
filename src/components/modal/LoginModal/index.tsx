"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./style.module.css";
import ToggleSwitch from "@/components/inputComponent/ToggleSwitch";
import { IoClose } from "react-icons/io5";

type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: { rememberMe: false },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.loginModel}>
      <div className={styles.modalBox}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose}>
          <IoClose size={20} color="#9BC9FF" />
        </button>

        <h2 className={styles.title}>Nice to see you again</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* Email / Phone */}
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Email or phone number"
              {...register("email", { required: "Email or phone is required" })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className={styles.inputBox}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </span>
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>

          {/* Remember me & Forgot password */}
          <div className={styles.optionsRow}>
            <div className={styles.rememberMe}>
              <Controller
                name="rememberMe"
                control={control}
                render={({ field }) => (
                  <ToggleSwitch value={field.value} onChange={field.onChange} />
                )}
              />
              <span>Remember me</span>
            </div>
            <a href="#" className={styles.forgot}>
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button type="submit" className={styles.signInBtn}>
            Sign in
          </button>
        </form>

        {/* Google Button */}
        <button className={styles.googleBtn}>
          <FcGoogle size={20} /> Or sign in with Google
        </button>

        {/* Sign up link */}
        <p className={styles.signupText}>
          Don’t have an account? <a href="#">Sign up now</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
