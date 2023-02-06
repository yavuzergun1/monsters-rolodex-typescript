import "./search-box.styles.css";
import { ChangeEventHandler, ChangeEvent } from "react";

// İKİ SEÇENEĞİMİZ VAR. interface kullanırsak ilk seçenek propları aynı isimler içinde ayrı ayrı yazmak. typescript bunları birleştirir. İkinci seçenek ise farklı interface isimleri altında yazabilir ve bunları "extend" metodu ile birleştirebiliriz.
//  Veya TYPE kullanırsak bütün propları bir TYPE içinde yazabiliriz.

// İLK SEÇENEK
interface ISearchBoxProps {
  className: string;
  placeholder?: string /* ?: means it can be string or null */;
}

interface ISearchBoxProps {
  onChangeHandler: (
    a: string
  ) => void /* if we wont return anything, we can write it void which means in javascript "undefined" */;
}

// İKİNCİ SEÇENEK
interface ISearchBoxProps extends IChangeHandler {
  className: string;
  placeholder?: string /* ?: means it can be string or null */;
}
interface IChangeHandler {
  onChangeHandler: (
    a: string
  ) => void /* if we wont return anything, we can write it void which means in javascript "undefined" */;
}

// BİR DİĞER METOD İSE "type" metodu:
// İLK SEÇENEK BURADA OLDUĞU GİBİ HEPSİNİ BİR TYPE METODU İÇİNDE YAZABİLİRİZ

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  func: ChangeEventHandler; /* şunu yazıp üzerine hover yaptığımızda bize yazmamız gereken fonksiyonu gösteriyor */
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;

  // onChangeHandler: ChangeEventHandler<HTMLInputElement> Bu da diğer yöntemi
};

// VEYA AŞAĞIDA OLDUĞU GİBİ AYRI AYRI YAZILAN TYPE METODLARINI BİRLEŞTİREBİLİRİZ:

type TypeSearchBoxProps = {
  className: string;
  placeholder?: string;
};

type ChangeHandleProps = {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

type AllProps = TypeSearchBoxProps | ChangeHandleProps;

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
