import React from "react";

const Pagination = () => {
    return (
    <>
        <nav class="items-center">
        <ul class="flex items-center -space-x-px h-8 text-sm">
            <li>
            <a
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="./client_information"
                >1</a
            >
            </li>
            <li aria-current="page">
            <a
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="./client_education"
                >2
                </a>
            </li>
            <li>
            <a
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="./client_experience"
                >3</a>
            </li>
            <li>
            <a
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="./client_skills"
                >4</a>
            </li>
        </ul>
      </nav>
    </>
    )
}

export default Pagination;