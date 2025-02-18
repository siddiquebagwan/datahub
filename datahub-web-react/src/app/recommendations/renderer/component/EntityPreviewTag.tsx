import React from 'react';
import { Image, Tag } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Maybe } from 'graphql/jsutils/Maybe';

const EntityTag = styled(Tag)`
    margin: 4px;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
`;

const IconContainer = styled.span`
    padding-left: 4px;
    padding-right: 4px;
    display: flex;
    align-items: center;
`;

const PlatformLogo = styled(Image)`
    max-height: 16px;
    width: auto;
    object-fit: contain;
    background-color: transparent;
`;

const DisplayNameContainer = styled.span`
    padding-left: 4px;
    padding-right: 4px;
`;

type Props = {
    displayName: string;
    url: string;
    platformLogoUrl?: string;
    platformLogoUrls?: Maybe<string>[];
    logoComponent?: React.ReactNode;
    onClick?: () => void;
};

export const EntityPreviewTag = ({
    displayName,
    url,
    platformLogoUrl,
    platformLogoUrls,
    logoComponent,
    onClick,
}: Props) => {
    return (
        <Link to={url} onClick={onClick}>
            <EntityTag>
                <TitleContainer>
                    <IconContainer>
                        {(!!platformLogoUrl && !platformLogoUrls && (
                            <PlatformLogo preview={false} src={platformLogoUrl} alt="none" />
                        )) ||
                            (!!platformLogoUrls &&
                                platformLogoUrls.slice(0, 2).map((platformLogoUrlsEntry) => (
                                    <>
                                        <PlatformLogo preview={false} src={platformLogoUrlsEntry || ''} alt="none" />
                                    </>
                                ))) ||
                            logoComponent}
                    </IconContainer>
                    <DisplayNameContainer>
                        <span className="test-mini-preview-class">{displayName}</span>
                    </DisplayNameContainer>
                </TitleContainer>
            </EntityTag>
        </Link>
    );
};
