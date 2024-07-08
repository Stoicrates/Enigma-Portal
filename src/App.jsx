import "./App.css";
import Title from "./components/Title";
import Card from "./components/Card";
import Annoucements from "./components/Announcements";
import Birthdays from "./components/Birthdays.jsx";

function App() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="flex h-full gap-2 p-2 max-md:flex-col">
          <div className="flex flex-col gap-2 md:w-[25dvw] ">
            <Title />
            <Birthdays />
            <Annoucements />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <Card
              title="Anjay"
              description="short description aja broooooo"
              link="https://www.google.com"
            />
            <Card
              title="Anjay"
              description="short description aja broooooo"
              link="https://www.google.com"
            />
            <Card
              title="Anjay"
              description="short description aja broooooo"
              link="https://www.google.com"
            />
            <Card
              title="Anjay"
              description="short description aja broooooo"
              link="https://www.google.com"
            />
            <div className="flex flex-row gap-2">
              <Card
                title="Anjay"
                description="short description aja broooooo"
                link="https://www.google.com"
              />
              <Card
                title="Anjay"
                description="short description aja broooooo"
                link="https://www.google.com"
              />
              <Card
                title="Anjay"
                description="short description aja broooooo"
                link="https://www.google.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:w-[25dvw]">
            <Card
              title="Sentrifugo"
              description="Sini cuti"
              link="https://hc.enigmacamp.com/index.php/"
            />
            <Card
              title="Brand Identity"
              description="short description aja broooooo"
              link="https://www.canva.com/design/DAF7P45zHvE/A7CKao-LslL3QofondMstA/view?utm_content=DAF7P45zHvE&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            />
            <Card
              title="Product Knowledge"
              description="short description aja broooooo"
              link="https://www.canva.com/design/DAGDyYhW4Ng/2X41jlawzd3dpl6liPXapQ/view?utm_content=DAGDyYhW4Ng&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            />
            <Card
              title="Apa kek"
              description="short description aja broooooo"
              link="https://www.google.com"
            />
            <Card
              title="Apa kek"
              description="short description aja broooooo"
              link="https://www.google.com"
            />
            <Card
              title="Anjay"
              description="short description aja broooooo"
              link="https://www.google.com"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
