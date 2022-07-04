import { FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";


interface AddUserDataProps {
  onSubmit: any;
}

export default function AddUserForm(props: AddUserDataProps) {
  const { register, handleSubmit } = useForm<any>();

  return (
    <form
      className="max-w-[400px] w-full mx-auto bg-darkBlue p-8"
      onSubmit={handleSubmit(props.onSubmit)}
      method="POST"
    >
      <h2 className="text-neonGreen text-left">SUBSCRIBE AND GET</h2>
      <h2 className="text-neonGreen text-left">YOUR BONUS!</h2>
      <div>
        <input
          className="p-2 mt-2 rounded-sm bg-grayBlue w-full"
          placeholder="Email"
          {...register("email", {
            required: "Email Required"
          })}
        />
      </div>
      <div>
        <input
          className="p-2 mt-2 rounded-sm bg-grayBlue w-full"
          placeholder="First Name"
          {...register("firstName", {
            required: "First Name Required"
          })}
        />
      </div>
      <div>
        <input
          className="p-2 mt-2 rounded-sm bg-grayBlue w-full"
          placeholder="Last Name"
          {...register("lastName", {
            required: "Last Name Required"
          })}
        />
      </div>
      <div>
        <input
          className="p-2 mt-2 rounded-sm bg-grayBlue w-full"
          placeholder="Address"
          {...register("address", {
            required: "Address Required"
          })}
        />
      </div>

      <button
        type="submit"
        className="bg-neonGreen py-2 my-5 rounded-sm w-full text-white"
      >
        STAY UPDATED
      </button>

      <span className="text-offWhite text-center pt-4 text-xs flex justify-center mt-36">
        <span className="justify-center items-center">
          <FaLock color="#9ca4ac" size={12} />
        </span>
        Your Information will be
        <br />
        shared with any third party.
      </span>
    </form>
  );
}
