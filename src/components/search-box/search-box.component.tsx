import './search-box.styles.css';

interface ISearchBoxProps  {
  className: string;
  placeholder?: string; /* ?: means it can be string or null */
}

interface ISearchBoxProps {
  onChangeHandler: (
    a: string
  ) => void /* if we wont return anything, we can write it void which means in javascript "undefined" */;
}



const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}
  />
);

export default SearchBox;
