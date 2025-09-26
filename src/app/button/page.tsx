import { Icon } from "@iconify/react";
import React from "react";

const page = () => {
  return (
    <>
      <section className="title py-10 mx-auto text-center">
        <h1>This is a Button Component</h1>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button XS - Rounded None</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 hover:rounded bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 hover:rounded bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 hover:rounded bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 hover:rounded bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 hover:rounded bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 hover:rounded bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 hover:rounded bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 hover:rounded bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 hover:rounded bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 hover:rounded bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 hover:rounded bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 hover:rounded bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button XS - Rounded</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded hover:rounded-md bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded hover:rounded-md bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded hover:rounded-md bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded hover:rounded-md bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded hover:rounded-md bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded hover:rounded-md bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded hover:rounded-md bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded hover:rounded-md bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded hover:rounded-md bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded hover:rounded-md bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded hover:rounded-md bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded hover:rounded-md bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button XS - Rounded LG </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-md hover:rounded-lg bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-md hover:rounded-lg bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-md hover:rounded-lg bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-md hover:rounded-lg bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-md hover:rounded-lg bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-md hover:rounded-lg bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-md hover:rounded-lg bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-md hover:rounded-lg bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button XS - Rounded 2XL </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button XS - Rounded Full </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-full hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-full hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-full hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-full hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-full hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-full hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-1 py-0.5 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-full hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-1 py-0.5 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-full hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button SM - Rounded None</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-2 py-1 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-2 py-1 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 hover:rounded bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-2 py-1 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 hover:rounded bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-2 py-1 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-2 py-1 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 hover:rounded bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-2 py-1 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 hover:rounded bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-2 py-1 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-2 py-1 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 hover:rounded bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-2 py-1 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 hover:rounded bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-2 py-1 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-2 py-1 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 hover:rounded bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-2 py-1 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 hover:rounded bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-2 py-1 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-2 py-1 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 hover:rounded bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-2 py-1 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 hover:rounded bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-2 py-1 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-2 py-1 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 hover:rounded bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-2 py-1 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 hover:rounded bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button SM - Rounded</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-2 py-1 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-2 py-1 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded hover:rounded-md bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-2 py-1 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded hover:rounded-md bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-2 py-1 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-2 py-1 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded hover:rounded-md bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-2 py-1 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded hover:rounded-md bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-2 py-1 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-2 py-1 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded hover:rounded-md bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-2 py-1 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded hover:rounded-md bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-2 py-1 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-2 py-1 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded hover:rounded-md bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-2 py-1 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded hover:rounded-md bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-2 py-1 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-2 py-1 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded hover:rounded-md bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-2 py-1 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded hover:rounded-md bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-2 py-1 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-2 py-1 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded hover:rounded-md bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-2 py-1 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded hover:rounded-md bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button SM - Rounded LG </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-2 py-1 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-2 py-1 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-2 py-1 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-2 py-1 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-2 py-1 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-2 py-1 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-2 py-1 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-2 py-1 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-md hover:rounded-lg bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-2 py-1 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-md hover:rounded-lg bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-2 py-1 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-2 py-1 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-md hover:rounded-lg bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-2 py-1 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-md hover:rounded-lg bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-2 py-1 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-2 py-1 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-md hover:rounded-lg bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-2 py-1 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-md hover:rounded-lg bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-2 py-1 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-2 py-1 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-md hover:rounded-lg bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-2 py-1 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-md hover:rounded-lg bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button SM - Rounded 2XL </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-2 py-1 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-2 py-1 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-2 py-1 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-2 py-1 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-2 py-1 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-2 py-1 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-2 py-1 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-2 py-1 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-2 py-1 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-2 py-1 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-2 py-1 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-2 py-1 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-2 py-1 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-2 py-1 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-2 py-1 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-2 py-1 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-2 py-1 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-2 py-1 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button SM - Rounded Full </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-2 py-1 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-2 py-1 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-2 py-1 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-2 py-1 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-2 py-1 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-2 py-1 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-2 py-1 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-2 py-1 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-full hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-2 py-1 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-full hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-2 py-1 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-2 py-1 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-full hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-2 py-1 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-full hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-2 py-1 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-2 py-1 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-full hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-2 py-1 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-full hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-2 py-1 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-2 py-1 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-full hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-2 py-1 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-full hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button MD - Rounded None</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-3 py-2 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-3 py-2 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 hover:rounded bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-3 py-2 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 hover:rounded bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-3 py-2 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-3 py-2 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 hover:rounded bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-3 py-2 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 hover:rounded bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-3 py-2 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-3 py-2 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 hover:rounded bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-3 py-2 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 hover:rounded bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-3 py-2 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-3 py-2 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 hover:rounded bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-3 py-2 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 hover:rounded bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-3 py-2 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-3 py-2 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 hover:rounded bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-3 py-2 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 hover:rounded bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-3 py-2 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-3 py-2 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 hover:rounded bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-3 py-2 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 hover:rounded bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button MD - Rounded</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-3 py-2 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-3 py-2 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded hover:rounded-md bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-3 py-2 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded hover:rounded-md bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-3 py-2 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-3 py-2 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded hover:rounded-md bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-3 py-2 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded hover:rounded-md bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-3 py-2 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-3 py-2 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded hover:rounded-md bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-3 py-2 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded hover:rounded-md bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-3 py-2 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-3 py-2 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded hover:rounded-md bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-3 py-2 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded hover:rounded-md bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-3 py-2 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-3 py-2 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded hover:rounded-md bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-3 py-2 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded hover:rounded-md bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-3 py-2 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-3 py-2 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded hover:rounded-md bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-3 py-2 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded hover:rounded-md bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button MD - Rounded LG </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-3 py-2 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-3 py-2 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-3 py-2 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-3 py-2 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-3 py-2 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-3 py-2 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-3 py-2 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-3 py-2 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-md hover:rounded-lg bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-3 py-2 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-md hover:rounded-lg bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-3 py-2 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-3 py-2 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-md hover:rounded-lg bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-3 py-2 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-md hover:rounded-lg bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-3 py-2 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-3 py-2 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-md hover:rounded-lg bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-3 py-2 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-md hover:rounded-lg bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-3 py-2 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-3 py-2 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-md hover:rounded-lg bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-3 py-2 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-md hover:rounded-lg bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button MD - Rounded 2XL </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-3 py-2 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-3 py-2 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-3 py-2 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-3 py-2 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-3 py-2 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-3 py-2 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-3 py-2 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-3 py-2 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-3 py-2 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-3 py-2 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-3 py-2 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-3 py-2 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-3 py-2 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-3 py-2 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-3 py-2 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-3 py-2 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-3 py-2 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-3 py-2 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button MD - Rounded Full </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-3 py-2 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-3 py-2 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-3 py-2 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-3 py-2 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-3 py-2 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-3 py-2 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-3 py-2 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-3 py-2 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-full hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-3 py-2 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-full hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-3 py-2 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-3 py-2 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-full hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-3 py-2 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-full hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-3 py-2 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-3 py-2 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-full hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-3 py-2 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-full hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-3 py-2 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-3 py-2 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-full hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-3 py-2 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-full hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button LG - Rounded None</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-4 py-3 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-4 py-3 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 hover:rounded bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-4 py-3 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 hover:rounded bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-4 py-3 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-4 py-3 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 hover:rounded bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-4 py-3 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 hover:rounded bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-4 py-3 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-4 py-3 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 hover:rounded bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-4 py-3 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 hover:rounded bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-4 py-3 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-4 py-3 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 hover:rounded bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-4 py-3 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 hover:rounded bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-4 py-3 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-4 py-3 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 hover:rounded bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-4 py-3 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 hover:rounded bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-4 py-3 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-none hover:rounded disabled:hover:rounded-none disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-4 py-3 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 hover:rounded bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-4 py-3 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 hover:rounded bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-none disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button LG - Rounded</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-4 py-3 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-4 py-3 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded hover:rounded-md bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-4 py-3 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded hover:rounded-md bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-4 py-3 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-4 py-3 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded hover:rounded-md bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-4 py-3 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded hover:rounded-md bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-4 py-3 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-4 py-3 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded hover:rounded-md bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-4 py-3 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded hover:rounded-md bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-4 py-3 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-4 py-3 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded hover:rounded-md bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-4 py-3 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded hover:rounded-md bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-4 py-3 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-4 py-3 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded hover:rounded-md bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-4 py-3 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded hover:rounded-md bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-4 py-3 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded hover:rounded-md disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-4 py-3 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded hover:rounded-md bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-4 py-3 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded hover:rounded-md bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button LG - Rounded LG </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-4 py-3 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-4 py-3 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-4 py-3 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-4 py-3 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-4 py-3 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-4 py-3 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-md hover:rounded-lg bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-4 py-3 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-4 py-3 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-md hover:rounded-lg bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-4 py-3 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-md hover:rounded-lg bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-4 py-3 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-4 py-3 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-md hover:rounded-lg bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-4 py-3 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-md hover:rounded-lg bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-4 py-3 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-4 py-3 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-md hover:rounded-lg bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-4 py-3 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-md hover:rounded-lg bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-4 py-3 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-md hover:rounded-lg disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-4 py-3 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-md hover:rounded-lg bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-4 py-3 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-md hover:rounded-lg bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-md disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button LG - Rounded 2XL </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-4 py-3 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-4 py-3 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-4 py-3 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-4 py-3 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-4 py-3 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-4 py-3 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-4 py-3 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-4 py-3 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-4 py-3 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-4 py-3 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-4 py-3 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-4 py-3 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-4 py-3 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-4 py-3 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-4 py-3 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-4 py-3 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-2xl hover:rounded-xl disabled:hover:rounded disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-4 py-3 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-4 py-3 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-2xl hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h3 className="text-primary-500">Button LG - Rounded Full </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------- PRIMARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Button</p>
            <button className="px-4 py-3 text-base-50 bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-primary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-4 py-3 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 outline outline-primary-500 hover:outline-primary-700 active:outline-primary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PRIMARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Primary Outline Button</p>
            <button className="px-4 py-3 w-fit text-primary-500 hover:text-primary-700 active:text-primary-800 active:outline-primary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-primary-100 active:bg-primary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-primary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Button</p>
            <button className="px-4 py-3 text-base-50 bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-secondary-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-4 py-3 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 outline outline-secondary-500 hover:outline-secondary-700 active:outline-secondary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SECONDARY GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Secondary Outline Button</p>
            <button className="px-4 py-3 w-fit text-secondary-500 hover:text-secondary-700 active:text-secondary-800 active:outline-secondary-800 rounded-full hover:rounded-xl bg-transparent hover:bg-secondary-100 active:bg-secondary-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-secondary-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Button</p>
            <button className="px-4 py-3 text-base-50 bg-pending-500 hover:bg-pending-700 active:bg-pending-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-pending-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-4 py-3 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 outline outline-pending-500 hover:outline-pending-700 active:outline-pending-800 rounded-full hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- PENDING GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Pending Outline Button</p>
            <button className="px-4 py-3 w-fit text-pending-500 hover:text-pending-700 active:text-pending-800 active:outline-pending-800 rounded-full hover:rounded-xl bg-transparent hover:bg-pending-100 active:bg-pending-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-pending-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Button</p>
            <button className="px-4 py-3 text-base-50 bg-success-500 hover:bg-success-700 active:bg-success-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-success-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-4 py-3 w-fit text-success-500 hover:text-success-700 active:text-success-800 outline outline-success-500 hover:outline-success-700 active:outline-success-800 rounded-full hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- SUCCESS GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Success Outline Button</p>
            <button className="px-4 py-3 w-fit text-success-500 hover:text-success-700 active:text-success-800 active:outline-success-800 rounded-full hover:rounded-xl bg-transparent hover:bg-success-100 active:bg-success-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-success-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Button</p>
            <button className="px-4 py-3 text-base-50 bg-danger-500 hover:bg-danger-700 active:bg-danger-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-danger-500 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-4 py-3 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 outline outline-danger-500 hover:outline-danger-700 active:outline-danger-800 rounded-full hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- DANGER GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Danger Outline Button</p>
            <button className="px-4 py-3 w-fit text-danger-500 hover:text-danger-700 active:text-danger-800 active:outline-danger-800 rounded-full hover:rounded-xl bg-transparent hover:bg-danger-100 active:bg-danger-200 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-danger-500">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Button</p>
            <button className="px-4 py-3 text-base-50 bg-base-950 hover:bg-base-700 active:bg-base-800 rounded-full hover:rounded-xl disabled:hover:rounded-full disabled:hover:bg-base-950 w-fit">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE OUTLINE BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-4 py-3 w-fit text-base-950 hover:text-base-700 active:text-base-950 outline outline-base-500 hover:outline-base-700 active:outline-base-800 rounded-full hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>

          {/* --------------------------- BASE GHOST BUTTON --------------------------- */}
          <div className="py-5 flex flex-col gap-4">
            <p>Base Outline Button</p>
            <button className="px-4 py-3 w-fit text-base-950 hover:text-base-700 active:text-base-950 active:outline-base-800 rounded-full hover:rounded-xl bg-transparent hover:bg-base-200 active:bg-base-300 disabled:rounded-2xl disabled:hover:bg-transparent disabled:hover:text-base-950">
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
              <p>Button</p>
              <Icon icon="fluent:home-20-regular" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
