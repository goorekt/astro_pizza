import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AiOutlinePhone } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
interface Props {
	className?: string;
}

const options = ["Home", "Contact", "Menu"];

const AppBar = ({ className }: Props) => {
	return (
		<div
			className={twMerge(
				"flex  h-24 w-screen flex-row items-center justify-between bg-slate-100 px-5 text-lg shadow-lg md:h-32 ",
				className
			)}
		>
			<AiFillHome size={50} className="scale-75 cursor-pointer md:scale-100 " />

			<IoMdMenu size={30} className="md:hidden peer"/>
			<div className="hidden min-w-min md:flex peer-hover:flex flex-row justify-between  gap-3 sm:text-xs  md:text-2xl">
				
					<ul className="hidden flex-row gap-3 md:flex  md:gap-16 " id="navbar-default">
						{options.map((element) => (
							<li>
								<a
									href="#"
									className="transition-scale flex cursor-pointer items-center duration-200 hover:scale-105"
								>
									{element}
								</a>
							</li>
						))}
					</ul>
			
			</div>
		</div>
	);
};

export default AppBar;
