import db from "../Firestore/Firestore";
import Announcement from '../Announcement/Announcement'

let announcementsList = [];
db.collection("announcements")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      announcementsList.push(
        <Announcement
          modName={doc.data().mod}
          announcementDate={doc.data().date}
          announcementBody={doc.data().description}
        />
      );
    });
  });

  export default announcementsList;
