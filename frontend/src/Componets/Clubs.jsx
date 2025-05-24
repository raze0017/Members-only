import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "./Posts";
function Clubs() {
  const navigate = useNavigate();
  const [clubs, setClubs] = useState([]);
  const [joinedClubs, setJoinedClubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user_Id = localStorage.getItem("token");
        const response = await fetch(
          `http://localhost:3000/clubs?user_Id=${user_Id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const { clubs, joined } = await response.json();
        if (!clubs || clubs.length === 0) {
          setClubs([]);
        } else {
          setClubs(clubs);
        }
        if (!joined || joined.length === 0) {
          setJoinedClubs([]);
        } else {
          {
            const joinedIds = joined.map((j) => j.club_id);
            setJoinedClubs(joinedIds);
          }
        }
      } catch (e) {
        console.log("ERROR IN FETCHING: ", e);
      }
    };
    fetchData();
  }, []);

  const joinGroup = async (clubId) => {
    try {
      const user_id = localStorage.getItem("token");
      console.log(user_id, clubId);

      const response = await fetch(`http://localhost:3000/clubs/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, clubId }),
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.text();

        console.error("Failed to join group:", errorData.message || errorData);
        return;
      }

      const data = await response.text();
      setJoinedClubs((prevClubs) => [...prevClubs, clubId]);

      console.log("Successfully joined group:", data);
    } catch (error) {
      console.log("ERROR in joining group: ", error);
    }
  };

  const groupDetails = async (club_id) => {
    navigate(`/clubs/${club_id}/posts`);
  };
  return (
    <>
      <div className="newClub flex justify-center items-center">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Create new club!
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg"></h3>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        {clubs.length === 0 ? (
          <p>No clubs found.</p>
        ) : (
          <ul className="card bg-base-300 w-96 shadow-xl p-4 space-y-4">
            {clubs.map((club, index) => (
              <li
                className="p-4 bg-base-100 rounded-lg shadow flex flex-col gap-2"
                key={index}
              >
                <div className="text-lg font-medium">{club.name}</div>
                <div className="card-actions justify-end">
                  {console.log(
                    "joinedClubs",
                    joinedClubs,
                    typeof joinedClubs[0]
                  )}
                  {console.log("club.id", club.id, typeof club.id)}
                  {joinedClubs.includes(club.id) ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => groupDetails(club.id)}
                    >
                      Show Posts!!
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => joinGroup(club.id)}
                    >
                      Join now!
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Clubs;
