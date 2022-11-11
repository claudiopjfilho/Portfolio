import React, { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string;
}

interface RepoBannerProps {
  name: string;
  description: string;
  homepage: string;
}

export default function RepoBanner(props: RepoBannerProps) {
  return (
    <div>
      <div>
        <a
          href={props.homepage}
          target={"_blank"}
          className=" rounded-lg overflow-hidden"
        >
          <div className="">
            <strong className="font-bold text-white block">{props.name}</strong>

            <span className="text-zinc-300 text-sm  mt-1">
              {props.description}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
