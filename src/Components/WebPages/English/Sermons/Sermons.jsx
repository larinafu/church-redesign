import Authentication from "../../../Authentication/Authentication";
const Sermons = (props) => {
  return (
    <div>
      <Authentication
        isModerator={props.isModerator}
        setIsModerator={props.setIsModerator}
        modName={props.modName}
        setModName={props.setModName}
      />
    </div>
  );
};

export default Sermons;
