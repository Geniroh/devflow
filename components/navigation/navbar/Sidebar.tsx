"use client";
import React from "react";
import NavLinks from "./NavLinks";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Image from "next/image";

const Sidebar = () => {
  const session = useSession();
  return (
    <section className="h-[calc(100vh-85px)] max-w-[300px] min-w-[266px] hidden md:flex background-light900_dark200 flex-col justify-between overflow-auto no-scrollbar px-4 py-4">
      <div className="flex flex-col w-full justify-center">
        <NavLinks />
      </div>

      <div>
        {session.data ? (
          <form>
            <Button>Logout</Button>
          </form>
        ) : (
          <div className="flex flex-col gap-3">
            <Link href={ROUTES.SIGN_IN}>
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient">Log In</span>
              </Button>
            </Link>
            <Link href={ROUTES.SIGN_UP}>
              <Button className="small-medium btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                <span>Sign Up</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
