"use client";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button/button";
import IconButton from "@/components/ui/button/iconbutton";
import CountInput from "@/components/ui/input/countinput";
import Input from "@/components/ui/input/input";
import PhoneInput from "@/components/ui/input/phoneinput";
import Textarea from "@/components/ui/input/textarea";
import { useToast } from "@/components/ui/toast";
import Tooltip from "@/components/ui/tooltip";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  const { show } = useToast();

  return (
    <>
      <section className="components container mx-auto flex flex-col gap-6 py-20 px-5">
        <Input
          placeholder="Search here..."
          shortcutKey="ctrl+k" // functional binding
          onShortcutPress={() => alert("CTRL+K pressed")}
          onEnterPress={() => alert("Enter pressed")}
          shortcutBase="CTRL"
          shortcutKeyDisplay="K" // visual badge
          leftIcon="fluent:search-20-regular"
          radius="lg"
          inputSize="sm"
        />

        <Button variant="ghost" color="primary" rounded="lg">
          Primary Button
        </Button>

        <IconButton
          icon="mdi:delete"
          variant="outline"
          color="danger"
          size="xs"
          rounded="lg"
        />

        <IconButton
          icon="mdi:delete"
          variant="outline"
          color="danger"
          size="sm"
          rounded="full"
        />

        <IconButton
          icon="mdi:delete"
          variant="outline"
          color="danger"
          size="md"
          rounded="full"
        />

        <IconButton
          icon="mdi:delete"
          variant="outline"
          color="danger"
          size="xs"
          rounded="full"
        />

        {/* // With icon */}
        <IconButton
          icon="mdi:delete"
          variant="outline"
          color="danger"
          size="xs"
          rounded="full"
        />

        {/* // With label (max 2 characters) */}
        <IconButton
          label="01"
          variant="outline"
          color="danger"
          size="xs"
          rounded="full"
        />

        {/* // With label - single character */}
        <IconButton label="5" variant="solid" color="primary" size="md" />

        <IconButton
          icon="fluent:people-20-regular"
          variant="ghost"
          color="pending"
          size="lg"
          rounded="2xl"
        />

        <PhoneInput
          label="Phone Number"
          defaultCountry="IN"
          radius="lg"
          onChange={(number, country) => {
            console.log(`${country.dialCode}${number}`);
          }}
        />

        <Textarea
          label="Description"
          placeholder="Enter description..."
          radius="lg"
          rows={1}
          maxHeight={100}
          message="You can write a detailed description here."
        />

        <CountInput
          label="Quantity"
          placeholder="Enter quantity"
          min={0}
          max={100}
          inputSize="default"
          radius="lg"
          message="Select the desired quantity."
        />

        <Button
          onClick={() =>
            show({
              title: "Toast Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.",
              color: "success",
              borderLeft: true,
              variant: "duo",
              position: "middle-center",
              radius: "none",
              icon: "ph:check-circle-bold",
              duration: 3000000,
              primaryAction: {
                label: "Undo",
                onClick: () => alert("Undo action"),
              },
              secondaryAction: {
                label: "Dismiss",
                onClick: () => alert("Dismiss action"),
              },
            })
          }
        >
          Show Toast
        </Button>

        <Link href="/toast" className="text-primary-600">
          {" "}
          Toast Page{" "}
        </Link>

        <div className="flex flex-wrap gap-3">
          <Badge label="Primary" color="primary" />
          <Badge label="Success" color="success" />
          <Badge label="Danger" color="danger" variant="duo" />
          <Badge
            label="Pending"
            color="pending"
            leftIcon="ph:clock"
            rightIcon="ph:caret-right"
          />
          <Badge label="Base" color="base" variant="duo" />
        </div>

        <div className="flex flex-wrap gap-8 justify-center items-center h-[300px]">
          <Tooltip label="Default tooltip" color="default" position="top">
            <Icon icon="ph:info" width={24} height={24} />
          </Tooltip>

          <Tooltip label="Primary tooltip" color="primary" position="bottom">
            <Icon icon="ph:star" width={24} height={24} />
          </Tooltip>

          <Tooltip label="Danger tooltip" color="danger" position="left">
            <Icon icon="ph:warning" width={24} height={24} />
          </Tooltip>

          <Tooltip label="Success tooltip" color="success" position="right">
            <Icon icon="ph:check-circle" width={24} height={24} />
          </Tooltip>
        </div>
      </section>
    </>
  );
}
