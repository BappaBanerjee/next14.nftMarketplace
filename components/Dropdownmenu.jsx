import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { dropdownMenuItems } from "@/data/dropdownmenu/menu";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Dropdownmenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm">
          <Image
            src="/assets/images/nft1.jpg"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-600 rounded-md bg-background-color-6 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* {menuItems.map((value, index) => ( */}
          {Object.keys(dropdownMenuItems).map((value, index) => (
            <div className="py-1" key={index}>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={dropdownMenuItems[value]}
                    className={classNames(
                      active
                        ? "bg-background-color-7 text-white"
                        : "text-white",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {value}
                  </a>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
