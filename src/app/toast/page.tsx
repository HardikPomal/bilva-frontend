import Button from "@/components/ui/button/button";
import IconButton from "@/components/ui/button/iconbutton";
import { Icon } from "@iconify/react";
import React from "react";

const page = () => {
  return (
    <>
      <section className="container mx-auto flex flex-col gap-6 py-20 px-5 bg-base-50 dark:bg-dark-base-50">
        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-primary-100 dark:bg-dark-primary-100 outline outline-primary-300 dark:outline-dark-primary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-primary-800 dark:text-dark-primary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-primary-800 dark:text-dark-primary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="primary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-secondary-100 dark:bg-dark-secondary-100 outline outline-secondary-300 dark:outline-dark-secondary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-secondary-800 dark:text-dark-secondary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-secondary-800 dark:text-dark-secondary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="secondary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-success-100 dark:bg-dark-success-100 outline outline-success-300 dark:outline-dark-success-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-success-800 dark:text-dark-success-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-success-800 dark:text-dark-success-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="success"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-danger-100 dark:bg-dark-danger-100 outline outline-danger-300 dark:outline-dark-danger-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-danger-800 dark:text-dark-danger-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-danger-800 dark:text-dark-danger-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="danger"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-pending-100 dark:bg-dark-pending-100 outline outline-pending-300 dark:outline-dark-pending-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-pending-800 dark:text-dark-pending-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-pending-800 dark:text-dark-pending-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="pending"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-primary-100 dark:bg-dark-primary-100 border-l-4 border-primary-300 dark:outline-dark-primary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-primary-800 dark:text-dark-primary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-primary-800 dark:text-dark-primary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="primary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-secondary-100 dark:bg-dark-secondary-100 border-l-4 border-secondary-300 dark:outline-dark-secondary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-secondary-800 dark:text-dark-secondary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-secondary-800 dark:text-dark-secondary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="secondary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-success-100 dark:bg-dark-success-100 border-l-4 border-success-300 dark:outline-dark-success-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-success-800 dark:text-dark-success-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-success-800 dark:text-dark-success-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="success"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-danger-100 dark:bg-dark-danger-100 border-l-4 border-danger-300 dark:outline-dark-danger-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-danger-800 dark:text-dark-danger-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-danger-800 dark:text-dark-danger-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="danger"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-pending-100 dark:bg-dark-pending-100 border-l-4 border-pending-300 dark:outline-dark-pending-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-pending-800 dark:text-dark-pending-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-pending-800 dark:text-dark-pending-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="pending"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-primary-600 dark:bg-dark-primary-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-secondary-600 dark:bg-dark-secondary-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-success-600 dark:bg-dark-success-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-danger-600 dark:bg-dark-danger-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-pending-600 dark:bg-dark-pending-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-gradient-to-r from-primary-100 dark:from-dark-primary-100 to-primary-300 dark:to-dark-primary-300 outline outline-primary-400 dark:outline-dark-primary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-gradient-to-r from-secondary-100 dark:from-dark-secondary-100 to-secondary-300 dark:to-dark-secondary-300 outline outline-secondary-400 dark:outline-dark-secondary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-gradient-to-r from-success-100 dark:from-dark-success-100 to-success-300 dark:to-dark-success-300 outline outline-success-400 dark:outline-dark-success-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-gradient-to-r from-danger-100 dark:from-dark-danger-100 to-danger-300 dark:to-dark-danger-300 outline outline-danger-400 dark:outline-dark-danger-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-gradient-to-r from-pending-100 dark:from-dark-pending-100 to-pending-300 dark:to-dark-pending-300 outline outline-pending-400 dark:outline-dark-pending-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>



        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-gradient-to-r from-primary-700 dark:from-dark-primary-700 to-primary-400 dark:to-dark-primary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>



        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-gradient-to-r from-secondary-700 dark:from-dark-secondary-700 to-secondary-400 dark:to-dark-secondary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>


        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-gradient-to-r from-success-700 dark:from-dark-success-700 to-success-400 dark:to-dark-success-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-gradient-to-r from-danger-700 dark:from-dark-danger-700 to-danger-400 dark:to-dark-danger-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>


        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">None</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-none shadow-lg bg-gradient-to-r from-pending-700 dark:from-dark-pending-700 to-pending-400 dark:to-dark-pending-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>


                <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-primary-100 dark:bg-dark-primary-100 outline outline-primary-300 dark:outline-dark-primary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-primary-800 dark:text-dark-primary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-primary-800 dark:text-dark-primary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="primary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-secondary-100 dark:bg-dark-secondary-100 outline outline-secondary-300 dark:outline-dark-secondary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-secondary-800 dark:text-dark-secondary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-secondary-800 dark:text-dark-secondary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="secondary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-success-100 dark:bg-dark-success-100 outline outline-success-300 dark:outline-dark-success-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-success-800 dark:text-dark-success-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-success-800 dark:text-dark-success-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="success"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-danger-100 dark:bg-dark-danger-100 outline outline-danger-300 dark:outline-dark-danger-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-danger-800 dark:text-dark-danger-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-danger-800 dark:text-dark-danger-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="danger"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-pending-100 dark:bg-dark-pending-100 outline outline-pending-300 dark:outline-dark-pending-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-pending-800 dark:text-dark-pending-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-pending-800 dark:text-dark-pending-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="pending"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-primary-100 dark:bg-dark-primary-100 border-l-4 border-primary-300 dark:outline-dark-primary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-primary-800 dark:text-dark-primary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-primary-800 dark:text-dark-primary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="primary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-secondary-100 dark:bg-dark-secondary-100 border-l-4 border-secondary-300 dark:outline-dark-secondary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-secondary-800 dark:text-dark-secondary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-secondary-800 dark:text-dark-secondary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="secondary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-success-100 dark:bg-dark-success-100 border-l-4 border-success-300 dark:outline-dark-success-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-success-800 dark:text-dark-success-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-success-800 dark:text-dark-success-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="success"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-danger-100 dark:bg-dark-danger-100 border-l-4 border-danger-300 dark:outline-dark-danger-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-danger-800 dark:text-dark-danger-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-danger-800 dark:text-dark-danger-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="danger"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-pending-100 dark:bg-dark-pending-100 border-l-4 border-pending-300 dark:outline-dark-pending-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-pending-800 dark:text-dark-pending-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-pending-800 dark:text-dark-pending-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="pending"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-primary-600 dark:bg-dark-primary-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-secondary-600 dark:bg-dark-secondary-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-success-600 dark:bg-dark-success-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-danger-600 dark:bg-dark-danger-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-pending-600 dark:bg-dark-pending-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-primary-100 dark:from-dark-primary-100 to-primary-300 dark:to-dark-primary-300 outline outline-primary-400 dark:outline-dark-primary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-secondary-100 dark:from-dark-secondary-100 to-secondary-300 dark:to-dark-secondary-300 outline outline-secondary-400 dark:outline-dark-secondary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-success-100 dark:from-dark-success-100 to-success-300 dark:to-dark-success-300 outline outline-success-400 dark:outline-dark-success-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-danger-100 dark:from-dark-danger-100 to-danger-300 dark:to-dark-danger-300 outline outline-danger-400 dark:outline-dark-danger-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-pending-100 dark:from-dark-pending-100 to-pending-300 dark:to-dark-pending-300 outline outline-pending-400 dark:outline-dark-pending-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>



        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-primary-700 dark:from-dark-primary-700 to-primary-400 dark:to-dark-primary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>



        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-secondary-700 dark:from-dark-secondary-700 to-secondary-400 dark:to-dark-secondary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>


        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-success-700 dark:from-dark-success-700 to-success-400 dark:to-dark-success-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-danger-700 dark:from-dark-danger-700 to-danger-400 dark:to-dark-danger-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>


        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">LG</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-pending-700 dark:from-dark-pending-700 to-pending-400 dark:to-dark-pending-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

                <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-primary-100 dark:bg-dark-primary-100 outline outline-primary-300 dark:outline-dark-primary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-primary-800 dark:text-dark-primary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-primary-800 dark:text-dark-primary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="primary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-secondary-100 dark:bg-dark-secondary-100 outline outline-secondary-300 dark:outline-dark-secondary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-secondary-800 dark:text-dark-secondary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-secondary-800 dark:text-dark-secondary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="secondary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-success-100 dark:bg-dark-success-100 outline outline-success-300 dark:outline-dark-success-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-success-800 dark:text-dark-success-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-success-800 dark:text-dark-success-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="success"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-danger-100 dark:bg-dark-danger-100 outline outline-danger-300 dark:outline-dark-danger-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-danger-800 dark:text-dark-danger-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-danger-800 dark:text-dark-danger-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="danger"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-pending-100 dark:bg-dark-pending-100 outline outline-pending-300 dark:outline-dark-pending-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-pending-800 dark:text-dark-pending-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-pending-800 dark:text-dark-pending-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="pending"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-primary-100 dark:bg-dark-primary-100 border-l-4 border-primary-300 dark:outline-dark-primary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-primary-800 dark:text-dark-primary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-primary-800 dark:text-dark-primary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="primary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-secondary-100 dark:bg-dark-secondary-100 border-l-4 border-secondary-300 dark:outline-dark-secondary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-secondary-800 dark:text-dark-secondary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-secondary-800 dark:text-dark-secondary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="secondary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-success-100 dark:bg-dark-success-100 border-l-4 border-success-300 dark:outline-dark-success-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-success-800 dark:text-dark-success-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-success-800 dark:text-dark-success-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="success"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-danger-100 dark:bg-dark-danger-100 border-l-4 border-danger-300 dark:outline-dark-danger-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-danger-800 dark:text-dark-danger-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-danger-800 dark:text-dark-danger-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="danger"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-pending-100 dark:bg-dark-pending-100 border-l-4 border-pending-300 dark:outline-dark-pending-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-pending-800 dark:text-dark-pending-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-pending-800 dark:text-dark-pending-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="pending"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-primary-600 dark:bg-dark-primary-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-secondary-600 dark:bg-dark-secondary-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-success-600 dark:bg-dark-success-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-danger-600 dark:bg-dark-danger-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-pending-600 dark:bg-dark-pending-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-gradient-to-r from-primary-100 dark:from-dark-primary-100 to-primary-300 dark:to-dark-primary-300 outline outline-primary-400 dark:outline-dark-primary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-gradient-to-r from-secondary-100 dark:from-dark-secondary-100 to-secondary-300 dark:to-dark-secondary-300 outline outline-secondary-400 dark:outline-dark-secondary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-gradient-to-r from-success-100 dark:from-dark-success-100 to-success-300 dark:to-dark-success-300 outline outline-success-400 dark:outline-dark-success-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-gradient-to-r from-danger-100 dark:from-dark-danger-100 to-danger-300 dark:to-dark-danger-300 outline outline-danger-400 dark:outline-dark-danger-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-gradient-to-r from-pending-100 dark:from-dark-pending-100 to-pending-300 dark:to-dark-pending-300 outline outline-pending-400 dark:outline-dark-pending-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>



        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-gradient-to-r from-primary-700 dark:from-dark-primary-700 to-primary-400 dark:to-dark-primary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>



        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-gradient-to-r from-secondary-700 dark:from-dark-secondary-700 to-secondary-400 dark:to-dark-secondary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>


        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-gradient-to-r from-success-700 dark:from-dark-success-700 to-success-400 dark:to-dark-success-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-gradient-to-r from-danger-700 dark:from-dark-danger-700 to-danger-400 dark:to-dark-danger-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>


        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">2XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-2xl shadow-lg bg-gradient-to-r from-pending-700 dark:from-dark-pending-700 to-pending-400 dark:to-dark-pending-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

                <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-primary-100 dark:bg-dark-primary-100 outline outline-primary-300 dark:outline-dark-primary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-primary-800 dark:text-dark-primary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-primary-800 dark:text-dark-primary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="primary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-secondary-100 dark:bg-dark-secondary-100 outline outline-secondary-300 dark:outline-dark-secondary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-secondary-800 dark:text-dark-secondary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-secondary-800 dark:text-dark-secondary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="secondary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-success-100 dark:bg-dark-success-100 outline outline-success-300 dark:outline-dark-success-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-success-800 dark:text-dark-success-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-success-800 dark:text-dark-success-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="success"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-danger-100 dark:bg-dark-danger-100 outline outline-danger-300 dark:outline-dark-danger-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-danger-800 dark:text-dark-danger-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-danger-800 dark:text-dark-danger-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="danger"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-pending-100 dark:bg-dark-pending-100 outline outline-pending-300 dark:outline-dark-pending-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-pending-800 dark:text-dark-pending-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-pending-800 dark:text-dark-pending-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="pending"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-primary-100 dark:bg-dark-primary-100 border-l-4 border-primary-300 dark:outline-dark-primary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-primary-800 dark:text-dark-primary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-primary-800 dark:text-dark-primary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="primary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="primary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-secondary-100 dark:bg-dark-secondary-100 border-l-4 border-secondary-300 dark:outline-dark-secondary-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-secondary-800 dark:text-dark-secondary-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-secondary-800 dark:text-dark-secondary-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="secondary" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="secondary"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-success-100 dark:bg-dark-success-100 border-l-4 border-success-300 dark:outline-dark-success-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-success-800 dark:text-dark-success-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-success-800 dark:text-dark-success-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="success" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="success"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-danger-100 dark:bg-dark-danger-100 border-l-4 border-danger-300 dark:outline-dark-danger-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-danger-800 dark:text-dark-danger-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-danger-800 dark:text-dark-danger-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="danger" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="danger"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">On</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-pending-100 dark:bg-dark-pending-100 border-l-4 border-pending-300 dark:outline-dark-pending-300 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-pending-800 dark:text-dark-pending-800" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-pending-800 dark:text-dark-pending-800">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="pending" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="pending"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-primary-600 dark:bg-dark-primary-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-secondary-600 dark:bg-dark-secondary-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-success-600 dark:bg-dark-success-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-danger-600 dark:bg-dark-danger-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">Off</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-pending-600 dark:bg-dark-pending-600 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-gradient-to-r from-primary-100 dark:from-dark-primary-100 to-primary-300 dark:to-dark-primary-300 outline outline-primary-400 dark:outline-dark-primary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-gradient-to-r from-secondary-100 dark:from-dark-secondary-100 to-secondary-300 dark:to-dark-secondary-300 outline outline-secondary-400 dark:outline-dark-secondary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-gradient-to-r from-success-100 dark:from-dark-success-100 to-success-300 dark:to-dark-success-300 outline outline-success-400 dark:outline-dark-success-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-gradient-to-r from-danger-100 dark:from-dark-danger-100 to-danger-300 dark:to-dark-danger-300 outline outline-danger-400 dark:outline-dark-danger-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Duo Tone</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-gradient-to-r from-pending-100 dark:from-dark-pending-100 to-pending-300 dark:to-dark-pending-300 outline outline-pending-400 dark:outline-dark-pending-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-950 dark:text-dark-base-950" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-950 dark:text-dark-base-950">Toast Title</h6>
                <p className="text-base-950 dark:text-dark-base-950">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>



        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Primary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-gradient-to-r from-primary-700 dark:from-dark-primary-700 to-primary-400 dark:to-dark-primary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>



        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Secondary</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-gradient-to-r from-secondary-700 dark:from-dark-secondary-700 to-secondary-400 dark:to-dark-secondary-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>


        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Success</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-gradient-to-r from-success-700 dark:from-dark-success-700 to-success-400 dark:to-dark-success-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>

        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Danger</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-gradient-to-r from-danger-700 dark:from-dark-danger-700 to-danger-400 dark:to-dark-danger-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>


        <div className="flex items-center gap-2 p-5 text-base-950 dark:text-dark-base-950">
            <p>Color:</p> <span className="body-text">Pending</span>
            <p>Theme:</p> <span className="body-text">Filled</span>
            <p>Radius:</p> <span className="body-text">3XL</span>
            <p>Border Left:</p> <span className="body-text">Off</span>
            <p>Gradient:</p> <span className="body-text">On</span>
        </div>
        <div className="flex gap-4 p-4 rounded-3xl shadow-lg bg-gradient-to-r from-pending-700 dark:from-dark-pending-700 to-pending-400 dark:to-dark-pending-400 w-fit">
            <Icon icon="fluent:home-20-regular" width="24" height="24" className="text-base-50 dark:text-dark-base-50" />
            <div className="message flex flex-col gap-3 max-w-[400px]">
                <h6 className="text-base-50 dark:text-dark-base-50">Toast Title</h6>
                <p className="text-base-50 dark:text-dark-base-50">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat parturient hac netus tellus curae.</p>
                <div className="action_buttons flex gap-4">
                    <Button variant="solid" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 1
                    </Button>
                    <Button variant="outline" color="base" rounded="none" leftIcon="fluent:home-20-regular" rightIcon="fluent:home-20-regular">
                        Action 2
                    </Button>
                </div>
            </div>
            <IconButton icon="fluent:dismiss-20-regular" size="sm" rounded="none" variant="ghost" color="base"/>
        </div>


        
      </section>
    </>
  );
};

export default page;
