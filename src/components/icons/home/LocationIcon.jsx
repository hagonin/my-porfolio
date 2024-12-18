const LocationIcon = (props) => {
  return (
    <svg width={18} height={24} {...props}>
      <path
        fill="#292929"
        d="M9 0C4.037 0 0 4.037 0 9c0 6.239 8.124 14.434 8.469 14.781a.753.753 0 0 0 1.062 0C9.876 23.435 18 15.239 18 9c0-4.963-4.037-9-9-9Zm0 22.166C7.209 20.248 1.5 13.766 1.5 9c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5c0 4.761-5.709 11.248-7.5 13.166Z"
      />
      <path
        fill="#B9B9B9"
        d="M9 4.5A4.505 4.505 0 0 0 4.5 9c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5S11.481 4.5 9 4.5ZM9 12c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3 1.655 0 3 1.346 3 3 0 1.655-1.345 3-3 3Z"
      />
    </svg>
  );
};

export default LocationIcon;
