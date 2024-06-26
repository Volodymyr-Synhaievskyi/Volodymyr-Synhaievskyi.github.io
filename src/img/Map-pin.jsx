import styles from './MapPin.module.css';

const MapPin = ({ styleValue }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles[styleValue]}
    viewBox="0 0 20 20"
    width="18px"
    height="20px"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M16.5 8.33334C16.5 14.1667 9 19.1667 9 19.1667C9 19.1667 1.5 14.1667 1.5 8.33334C1.5 6.34422 2.29018 4.43657 3.6967 3.03004C5.10322 1.62352 7.01088 0.833344 9 0.833344C10.9891 0.833344 12.8968 1.62352 14.3033 3.03004C15.7098 4.43657 16.5 6.34422 16.5 8.33334Z" />
    <path d="M9 10.8333C10.3807 10.8333 11.5 9.71406 11.5 8.33334C11.5 6.95263 10.3807 5.83334 9 5.83334C7.61929 5.83334 6.5 6.95263 6.5 8.33334C6.5 9.71406 7.61929 10.8333 9 10.8333Z" />
  </svg>
);

export default MapPin;
