import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from '../../hooks';
import { Button, Card, Divider } from '../../fields';
import * as Icons from '../../assets/files'
import { Icon } from '../../components';

const PageContent = () => {
    const [posts, setPosts] = useState([]);
    const [store] = useStore();
    const { user = {} } = store;

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((resp) => resp.data)
            .then((resp) => setPosts(resp))
            .catch((err) => console.error('Err occurred', err))
    }, []);

    return (
        <div className="home-page-content">
            <Card id="post-comment" block>
                <div className="top d-flex">
                    <img src={user.photo} className="radius-50" width={50} height={50} />
                    <Button type="secondary" shape="circle" block>Start a post</Button>
                </div>

                <div className="post-kinds d-flex justify-between w100">
                    <Button type="link" block>
                        <Icons.PhotoSVG fill="rgb(112, 181, 249)" /> <span>Photo</span>
                    </Button>

                    <Button type="link" block>
                        <Icons.VideoSVG fill="rgb(127, 193, 94)" /> <span>Video</span>
                    </Button>

                    <Button type="link" block>
                        <Icons.EventSVG fill="rgb(231, 163, 62)" /> <span>Event</span>
                    </Button>

                    <Button type="link" block>
                        <Icons.WriteArticleSVG fill="rgb(252, 146, 149)" /> <span>Write article</span>
                    </Button>
                </div>
            </Card>

            <Divider />

            <section className="posts">
                {posts.map((post, idx) => (
                    <Card id="post-item" block key={idx}>
                        <div className="post-item-header d-flex justify-between">
                            <div className="d-flex">
                                <img src={post.profile.photo} className="radius-50" width={40} height={40} />
                                <div className="names">
                                    <strong>{post.profile.fullname}</strong>
                                    <span className="low">{post.profile.role}</span>
                                    <small className="low">{post.createdAt} . <Icon icon="faGlobeEurope" /></small>
                                </div>
                            </div>

                            <Icon icon="faEllipsisH" />
                        </div>

                        <p className="content-text">{post.content}</p>

                        <div className="d-flex justify-between align-center">
                            <div className="likes d-flex align-center">
                                <Icons.LikeSVG />
                                <Icons.CheerSVG />
                                <Icons.ThinkSVG />
                                <small className="low link ml-2">Arda Zaman and {post.likes} others</small>
                            </div>

                            <small className="low link">Arda Zaman and {post.likes} others</small>
                        </div>

                        <Divider />

                        <div className="post-card-footer d-flex justify-between">
                            <Button type="link" block>
                                <Icons.ThumbSVG />
                                <span>Like</span>
                            </Button>

                            <Button type="link" block>
                                <Icons.CommentSVG />
                                <span>Comment</span>
                            </Button>

                            <Button type="link" block>
                                <Icons.ShareSVG />
                                <span>Share</span>
                            </Button>

                            <Button type="link" block>
                                <Icons.SendSVG />
                                <span>Send</span>
                            </Button>
                        </div>
                    </Card>
                ))}
            </section>
        </div>
    )
};

export default PageContent;