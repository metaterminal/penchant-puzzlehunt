"use client";
import { REMOTE } from "~/hunt.config";
import Link from "next/link";
import DynamicBackground from "~/app/(hunt)/(landing)/DynamicBackground";

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "2-digit",
  month: "numeric",
  day: "numeric",
});

const shortFormatter = new Intl.DateTimeFormat("en-US", {
  month: "numeric",
  day: "numeric",
});

export default function Landing() {
  return (

    <div className="h-[calc(100vh-32px)]">
      <DynamicBackground/>

      {/* Insert logo here */}
      {/* I am NOT responsible if you don't replace the logo */}
      <div className="fixed inset-0 flex items-center justify-center">

        <div className="relative flex flex-col items-center">
          <div
            className="absolute rounded-full blur-md  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "80rem",
              height: "60rem",
              background: `radial-gradient(
                            ellipse at center,
                            rgba(0, 114, 187, 1) 20%,
                            rgba(0, 114, 187, 0) 70%
                          )`,
            }}
            />
            <img src="/catbox.png" alt="Not a puzzle." className="relative z-10"/>
            <h1 className="text-main-header lg:text-4xl xl:text-5xl relative z-10">Penchant Puzzlehunt</h1>
            <p className="hidden md:block text-main-header relative z-10 lg:text-xl xl:text-2xl">
              {formatter.format(REMOTE.START_TIME)} –{" "}
              {formatter.format(REMOTE.END_TIME)}
            </p>
            <br></br>
            <p className="hidden md:block text-main-header relative z-10 lg:text-xl xl:text-2xl">
              <Link href="/register" className="hover:underline" prefetch={false}>
                <i>Click here to register!</i>
              </Link>
            </p>
          </div>
        </div>

    </div>
  );
}
