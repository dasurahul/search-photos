import { ShareSocial } from "react-share-social";
import { useParams } from "react-router-dom";

const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  width: "80%",
  maxWidth: "500px",
};
export default function RSSUsage() {
  const { part1, part2, part3 } = useParams();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ShareSocial
        style={style}
        url={part1 + "//" + part2 + "/" + part3}
        socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
      />
    </div>
  );
}
