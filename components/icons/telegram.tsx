import * as React from "react";

function TelegramIcon(props: React.SVGProps<SVGSVGElement> | undefined) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      height="80"
      width="80"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M14.9932 1.58221C15.0223 1.40736 14.9567 1.23016 14.8208 1.11645C14.6848 1.00274 14.4988 0.969519 14.3318 1.02914L0.331836 6.02914C0.143209 6.0965 0.0129867 6.26994 0.000913704 6.46987C-0.0111592 6.6698 0.0972469 6.85765 0.276398 6.94722L4.2764 8.94722C4.43688 9.02746 4.62806 9.01556 4.77735 8.91603L8.09775 6.70244L6.10957 9.18766C6.02203 9.29709 5.98442 9.43824 6.00592 9.57672C6.02742 9.7152 6.10605 9.8383 6.22265 9.91603L12.2227 13.916C12.3638 14.0101 12.5431 14.0262 12.6988 13.9588C12.8545 13.8914 12.9653 13.7496 12.9932 13.5822L14.9932 1.58221Z"
          fill="#fff"
        ></path>
      </g>
    </svg>
  );
}

export default TelegramIcon;
