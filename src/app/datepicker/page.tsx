import Button from "@/components/ui/button/button";
import IconButton from "@/components/ui/button/iconbutton";
import React from "react";

const page = () => {
  return (
    <>
    <section className="container px-5 mx-auto max-w-[400px]">
      <h5 className="my-10">Month Picker</h5>
      <div className="flex flex-col gap-3 p-3 rounded-xl outline outline-base-300 dark:outline-dark-base-300 shadow-lg">
        <div className="navigation flex gap-2 justify-between items-center">
        <IconButton
          icon="fluent:chevron-left-20-regular"
          variant="solid"
          color="base"
          size="md"
          rounded="lg"
          
        />
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2025 </Button>
        <IconButton
          icon="fluent:chevron-right-20-regular"
          variant="solid"
          color="base"
          size="md"
          rounded="lg"
        />
      </div>
      <hr className="text-base-300 dark:text-dark-base-300"/>
      <div className="months grid grid-cols-3 gap-y-4 gap-x-3">
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> Jan </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> Feb </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> Mar </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> Apr </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> May </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> Jun </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> Jul </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> Aug </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> Sep </Button>
        <Button variant="solid" color="primary" className="w-full justify-center" rounded="lg"> Oct </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> Nov </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> Dec </Button>
      </div>
      <hr className="text-base-300 dark:text-dark-base-300"/>
      <div className="this_month">
        <Button variant="ghost" color="primary" className="w-full justify-center" rounded="lg" leftIcon="fluent:calendar-date-20-regular"> This Month (October) </Button>
      </div>
      </div>

    </section>








    <section className="container px-5 mx-auto max-w-[400px]">
      <h5 className="my-10">Day Picker</h5>
      <div className="flex flex-col gap-3 p-3 rounded-xl outline outline-base-300 dark:outline-dark-base-300 shadow-lg">
        <div className="navigation flex gap-2 justify-between items-center">
        <IconButton
          icon="fluent:chevron-left-20-regular"
          variant="solid"
          color="base"
          size="md"
          rounded="lg"
          
        />
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> April 2025 </Button>
        <IconButton
          icon="fluent:chevron-right-20-regular"
          variant="solid"
          color="base"
          size="md"
          rounded="lg"
        />
      </div>
      <hr className="text-base-300 dark:text-dark-base-300"/>
      <div className="dates grid grid-cols-7">
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> S </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> M </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> T </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> W </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> T </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> F </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> S </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> 30 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> 31 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 1 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 2 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 3 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 4 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 5 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 6 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 7 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 8 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 9 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 10 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 11 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 12 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 13 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 14 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 15 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 16 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 17 </Button>
        <Button variant="solid" color="primary" className="w-full justify-center" rounded="lg" > 18 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 19 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 20 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 21 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 22 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 23 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 24 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 25 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 26 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 27 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 28 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 29 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" > 30 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> 1 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> 2 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg" disabled> 3 </Button>
        
      </div>
      <hr className="text-base-300 dark:text-dark-base-300"/>
      <div className="today">
        <Button variant="ghost" color="primary" className="w-full justify-center" rounded="lg" leftIcon="fluent:calendar-date-20-regular"> Today (18) </Button>
      </div>
      </div>

    </section>



    <section className="container px-5 mx-auto max-w-[400px]">
      <h5 className="my-10">Year Picker</h5>
      <div className="flex flex-col gap-3 p-3 rounded-xl outline outline-base-300 dark:outline-dark-base-300 shadow-lg">
        <div className="navigation flex gap-2 justify-between items-center">
        <IconButton
          icon="fluent:chevron-left-20-regular"
          variant="solid"
          color="base"
          size="md"
          rounded="lg"
          
        />
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2021 - 2032 </Button>
        <IconButton
          icon="fluent:chevron-right-20-regular"
          variant="solid"
          color="base"
          size="md"
          rounded="lg"
        />
      </div>
      <hr className="text-base-300 dark:text-dark-base-300"/>
      <div className="years grid grid-cols-3 gap-y-4 gap-x-3">
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2021 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2022 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2023 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2024 </Button>
        <Button variant="solid" color="primary" className="w-full justify-center" rounded="lg"> 2025 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2026 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2027 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2028 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2029 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2030 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2031 </Button>
        <Button variant="ghost" color="base" className="w-full justify-center" rounded="lg"> 2032 </Button>
      </div>
      <hr className="text-base-300 dark:text-dark-base-300"/>
      <div className="this_year">
        <Button variant="ghost" color="primary" className="w-full justify-center" rounded="lg" leftIcon="fluent:calendar-date-20-regular"> This Year (2025) </Button>
      </div>
      </div>

    </section>
    </>
  );
};

export default page;
