import './search-box.styles.css';

// İKİ SEÇENEĞİMİZ VAR. interface kullanırsak propları aynı isimler içinde ayrı ayrı yazarsak typescript bunları birleştirir. Veya TYPE kullanırsak bütün propları bir TYPE içinde yazabiliriz.

interface ISearchBoxProps  {
  className: string;
  placeholder?: string; /* ?: means it can be string or null */
}

interface ISearchBoxProps {
  onChangeHandler: (
    a: string
  ) => void /* if we wont return anything, we can write it void which means in javascript "undefined" */;
}

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (a:string) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}
  />
);

export default SearchBox;
