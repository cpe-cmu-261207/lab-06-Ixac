import {
  IconChevronDown,
  IconChevronUp,
  Iconmailforward,
  IconMapPins,
} from "@tabler/icons";
import React, { useState } from "react";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [raiwa, setRaiwa] = useState(false);
  const onClickHandler = () => {
    raiwa === false ? setRaiwa(true) : setRaiwa(false);
  };

  return (
    <div>
      <div className="border-bottom">
        <div className="d-flex align-items-center p-3" onClick={onClickHandler}>
          <img
            src={props.imgUrl}
            width="90px"
            className="rounded-circle me-4"
          />
          <span className="text-center display-6 me-auto">{props.name}</span>
          {raiwa === false ? <IconChevronDown /> : <IconChevronUp />}
        </div>
      </div>
      {raiwa === false ? null : (
        <UserCardDetail email={props.email} address={props.address} />
      )}
    </div>
  );
}
