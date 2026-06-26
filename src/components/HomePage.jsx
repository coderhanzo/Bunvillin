import React from "react";
import { ChefSignatures } from "./ChefSignatures";
import { EventsDiscovery } from "./EventsDiscovery";
import { HeroCta } from "./HeroCta";
import { MenuSneakPeek } from "./MenuSneakPeek";
import { ReservationBooking } from "./ReservationBooking";

export function HomePage() {
  return (
    <>
      <HeroCta />
      <MenuSneakPeek />
      <EventsDiscovery />
      <ChefSignatures />
      <ReservationBooking />
    </>
  );
}
