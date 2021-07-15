import Announcement from "../Announcement/Announcement";
const Announcements = (props) => {
  return (
    <>
      <Announcement isModerator={props.isModerator}/>
      <Announcement isModerator={props.isModerator}/>
      <Announcement isModerator={props.isModerator}/>
      <Announcement isModerator={props.isModerator}/>
    </>
  );
};

export default Announcements;
