import { useState } from "react";
import AddUserForm from "../components/AddUserForm";
import { Prisma, users } from "@prisma/client";

async function saveUserData(data: Prisma.usersCreateInput) {
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.log("error!!!");
    throw new Error(response.statusText);
  }

  return await response.json();
}

const Home = () => {
  const [userData, setUserData] = useState<users[]>([]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[url('../public/bg_image.jpeg')]  bg-no-repeat  bg-cover w-full h-full">
      <div className="lg:flex md:flex sm:flex shadow-2xl">
        <div className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h1 className="text-center text-darkBlue text-2xl">Get Everything You Need</h1>
          <h1 className="text-center text-darkBlue text-2xl">For Creating WordPress</h1>
          <h1 className="text-center text-darkBlue text-2xl">Websites.</h1>
          <img
            src="https://growths.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc8bd0a18-2d06-44c5-a288-07c14b0302d8%2Fillustration.png?table=block&id=bf667652-b074-4432-9d49-4b53e2884edc&spaceId=86a3aa74-052a-4d74-be6e-e2e3d0ba3c7c&width=2000&userId=&cache=v2"
            className="max-w-sm h-auto"
            width="500"
            height="600"
            alt="illustration"
          />
          <h3 className="text-center text-offWhite text-sm">
            All-in-one Multifunctional Subscribe
          </h3>
          <h3 className="text-center text-offWhite text-sm">
            Service Perfect for Launching All kinds of
          </h3>
          <h3 className="text-center text-offWhite text-sm">
            WordPress Projects!
          </h3>
        </div>
        <AddUserForm
          onSubmit={async (data: any, e: any) => {
            try {
              console.log(data);
              await saveUserData(data);
              setUserData([...userData, data]);
              e.target.reset();
            } catch (err) {
              console.log(err);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Home;
