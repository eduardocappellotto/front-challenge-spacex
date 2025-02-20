import { gql } from "apollo-boost";

export const getMissions = gql`
    query missions($limit: Int!) {
        launchesPast(limit: $limit) {
            details
            mission_name
            mission_id
            launch_date_utc
            links {
                article_link
                flickr_images
                video_link
                presskit
            }
        }
    }
`;
