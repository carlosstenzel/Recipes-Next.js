import { IconSearch } from "../../Icons/Search";
import { Content } from "./styles";

export const Search = () => (
  <Content>
    <>
      <IconSearch />
      <input type="text" placeholder="Search a meal ... " />
    </>
  </Content>
);
