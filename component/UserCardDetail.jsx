import { IconMailForward, IconMapPins } from "@tabler/icons";
import React from "react";

export default function UserCardDetail(props) {
  return (
    <div className="text-center">
      <strong>
        <IconMailForward />
        {props.email}
      </strong>
      <br />
      <strong>
        {" "}
        <IconMapPins />
        {props.address}
      </strong>
    </div>
  );
}
