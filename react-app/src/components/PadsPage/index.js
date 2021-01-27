import React from "react";

import {useEffect, useState} from "react";

// Database schema.

/*

    pad: a place for somebody to stay and jam

        name - string, "My Rock Cottage"
        description - string,
        rate - float,
        owner - user ref,
        address1 - string,
        address2 - string,
        city - string,
        state - string,
        zipCode - string,
        shared - boolean (true/false), other people can stay on the same night?
        occupancy - integer

*/

const PadsPage = () => {
    // const {location} = useSelector(state => {
    //     return state.selectedLocation;
    // });
    const [pads, setPads] = useState([]);
    useEffect(() => {
        const fetchFromServer = async () => {
            const responseFromServer = await fetch("/api/pads");
            const dataFromResponse = await responseFromServer.json();
            setPads(dataFromResponse);
        };
        // ask the server for pads.
        fetchFromServer();
    }, []);
    return (
        <div className="pads-listing">
            {pads.map(pad => {
                return (
                    <div className="pad" key={pad.id}>
                        <h1>{pad.name}</h1>
                        {pad.shared ? <h3 style={{ color: "green" }}>You will jam with others.</h3> :
                            <h3 style={{ color: "brown" }}>You will jam with others.</h3>}
                    </div>
                );
            })}
        </div>
    )
};

export default PadsPage;