import './style.scss';

export function Accordion({ title, children }) {
  return (
    <details className="accordion" open>
      <summary>
        <span>{title}</span>
        <span className="accordion__icon">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="0.5" width="23" height="23" rx="11.5" stroke="#2D68FE"/>
            <path d="M15.8335 12.94L12.9735 10.1133C12.9115 10.0509 12.8378 10.0013 12.7565 9.96741C12.6753 9.93356 12.5881 9.91614 12.5001 9.91614C12.4121 9.91614 12.325 9.93356 12.2437 9.96741C12.1625 10.0013 12.0888 10.0509 12.0268 10.1133L9.20013 12.94C9.13764 13.002 9.08805 13.0757 9.0542 13.157C9.02036 13.2382 9.00293 13.3253 9.00293 13.4133C9.00293 13.5013 9.02036 13.5885 9.0542 13.6697C9.08805 13.751 9.13764 13.8247 9.20013 13.8867C9.32504 14.0108 9.494 14.0805 9.67013 14.0805C9.84625 14.0805 10.0152 14.0108 10.1401 13.8867L12.5001 11.5267L14.8601 13.8867C14.9843 14.0098 15.1519 14.0793 15.3268 14.08C15.4145 14.0805 15.5015 14.0637 15.5827 14.0305C15.664 13.9973 15.7378 13.9485 15.8001 13.8867C15.8648 13.8269 15.9171 13.7549 15.9538 13.6749C15.9906 13.5948 16.0111 13.5083 16.0142 13.4203C16.0173 13.3323 16.0029 13.2445 15.9719 13.1621C15.9409 13.0796 15.8938 13.0042 15.8335 12.94Z" fill="#2D68FE"/>
          </svg>
        </span>
      </summary>

      <div>
        {children}
      </div>
    </details>    
  );
}
