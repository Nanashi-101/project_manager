import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const UserAuthentication: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = () => {

    dispatch(
      addUser({
        name: name,
        email: email,
        password: password,
        isAuthenticated: true,
      })
    );

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col max-w-[1240px] h-[75vh] mx-auto items-center justify-center gap-5">
        <h1 className="text-5xl font-semibold text-center my-2 leading-loose">
          Welcome to Todo Manager
        </h1>
        <h3 className="text-2xl font-semibold text-left my-2 leading-loose ">
          Enter your details:{" "}
        </h3>
        <div className="flex flex-col gap-5 w-full items-center justify-center">
          <div className="flex flex-col relative w-[20rem]">
            <input
              type="text"
              className="placeholder:font-semibold text border border-black px-5 py-3 rounded-[0.225rem] w-full"
              id="task"
              placeholder="Enter your name"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col relative w-[20rem]">
            <input
              type="email"
              className="placeholder:font-semibold text border border-black px-5 py-3 rounded-[0.225rem] w-full"
              id="time"
              placeholder="Enter your mail"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col relative w-[20rem]">
            <input
              type="password"
              className="placeholder:font-semibold text border border-black px-5 py-3 rounded-[0.225rem] w-full"
              id="password"
              placeholder="Create a password"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
        </div>
        <input
          type="submit"
          className="px-5 py-3 my-4 rounded-xl capitalize bg-blue-500 text-white font-bold text-xl hover:scale-105 transition-all"
          onClick={handleSubmit}
        />
    </div>
  );
};

export default UserAuthentication;
