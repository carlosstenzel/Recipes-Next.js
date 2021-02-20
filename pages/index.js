import { Container } from "../components/Base/Container";
import { Category } from "../components/Category";
import { NavBar } from "../components/Header/NavBar";
import { Recipes } from "../components/Recipes";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Category />
        <Recipes />
      </Container>
    </>
  );
}
