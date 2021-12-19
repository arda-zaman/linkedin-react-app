import React from 'react';
import { Button, Card, Divider } from '../../fields';
import { PhotoSVG, VideoSVG, WriteArticleSVG, EventSVG, ProfileImage } from '../../assets/files'

const PageContent = () => {

    return (
        <div className="home-page-content">
            <Card id="post-comment" block>
                <div className="top d-flex">
                    <img src={ProfileImage} className="radius-50" width={50} height={50} />
                    <Button type="secondary" shape="circle" block>Start a post</Button>
                </div>

                <div className="post-kinds d-flex justify-between w100">
                    <Button type="link" block>
                        <PhotoSVG fill="rgb(112, 181, 249)" />
                        <span>Photo</span>
                    </Button>

                    <Button type="link" block>
                        <VideoSVG fill="rgb(127, 193, 94)" />
                        <span>Video</span>
                    </Button>

                    <Button type="link" block>
                        <EventSVG fill="rgb(231, 163, 62)" />
                        <span>Event</span>
                    </Button>

                    <Button type="link" block>
                        <WriteArticleSVG fill="rgb(252, 146, 149)" />
                        <span>Write article</span>
                    </Button>
                </div>
            </Card>

            <Divider />
        </div>
    )
};

export default PageContent;