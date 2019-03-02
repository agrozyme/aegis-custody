import React, { Component } from "react";
import styled from "styled-components";

const NewsBox = {
    // backgroundColor: "pink",
    margin: "15px",
    padding: "25px",
    backgroundColor: "white",
    minWidth: "25%",
    boxShadow: "0px 2px 5px rgba(0,0,0,.2)"
}

const Stories = [
    {
        headline: "Aegis Crypto Custodian Launches And Already Gained Fosun As Lead Investor and Foxconn Client Deal",
        date: "Feb 27, 2019",
        link: "https://bitcoinexchangeguide.com/aegis-crypto-custodian-launches-and-already-gained-fosun-as-lead-investor-and-foxconn-client-deal/",
        description: "Holding cryptocurrency is best done through a crypto wallet or through a crypto custodian, considering that their infrastructure is designed to protect assets adequately. ",

    },
    {
        headline: "Another crypto custodian is on the rise and its first client is a Foxconn subsidiary",
        date: "Feb 26, 2019",
        link: "https://www.theblockcrypto.com/tiny/another-crypto-custodian-is-on-the-rise-and-its-first-client-is-a-foxconn-subsidiary/",
        description: "San Francisco crypto custodian Aegis has strengthened its hold on the Asian market, announcing Hong Kong-based Fosun as the lead investor on its Series A",

    },
    {
        headline: "Hit AI & Blockchain Aegis Custody技術長傅冠彰：企業用戶支持，才是區塊鏈與加密貨幣產業的發展關鍵！",
        date: "Feb 21, 2019",
        link: "https://bitnance.vip/news/401b724e-8c4b-426d-a42a-9406a434f2b0",
        description: "「全球各地的中大型企業用戶支持，才是區塊鏈與加密貨幣產業的發展關鍵！」Aegis Custody技術長傅冠彰在第二屆《Hit AI & Blockchain》人工智慧暨區塊鏈產業高峰會上表示。",

    },
    {
        headline: "Aegis Custody Details Plans to Launch Digital Assets Custody Solution at North American Bitcoin Conference",
        link: "https://www.cryptocurrencywire.com/cryptonewsbreaks/cryptonewsbreaks-aegis-custody-details-plans-to-launch-digital-assets-custody-solution-at-north-american-bitcoin-conference/",
        description: "Aegis Custody, a subsidiary of Aegis Capital Management, today announced plans to launch its digital assets custody solution for U.S. investors at the North American Bitcoin Conference, which is currently underway in Miami, Florida",

    },
    {
        headline: "Aegis Custody to Launch Digital Asset Custody Service at The North American Bitcoin Conference; CTO Frank Fu to Speak on Main Stage",
        date: "Jan 17, 2019",
        link: "https://globenewswire.com/news-release/2019/01/17/1701498/0/en/Aegis-Custody-to-Launch-Digital-Asset-Custody-Service-at-The-North-American-Bitcoin-Conference-CTO-Frank-Fu-to-Speak-on-Main-Stage.html",
        description: "Aegis Custody, a subsidiary of Aegis Capital Management, today announces that it will launch its digital assets custody solution for U.S. investors at the upcoming North American Bitcoin Conference",
    },
    {
        headline: "Aegis Custody Launches With Breakthrough Digital Custody Solution",
        date: "Jan 10, 2019",
        link: "https://www.bizjournals.com/sanfrancisco/prnewswire/press_releases/California/2019/01/10/UN19257",
        description: "Aegis Custody announced the launch of its new hardware-cloud hybrid solution, purpose-built for securely managing institution digital assets",
    },

]

const NewsStory = styled.div`
    min-width: 30%;
    margin: 25px;
    a {
        color: #FF6A5F
    }
    @media (max-width: 1000px) {
        min-width: 100%;
    }
`

const Arrow = styled.div`
    height: 40px;
    min-width: 40px;
    margin: 10px;
    background-image: url(./images/arrowleft.png);
    background-size: contain;
`

class News extends Component {
    render() {
        return (
            <div style={{ padding: "70px 40px", overflow: "hidden", maxWidth: "80%", margin: "0 auto", display: "flex", alignItems: "center" }}>
                <a href="#newsstory1"><Arrow href="#newsstory5"></Arrow></a>
                <div style={{ display: "flex", overflow: "scroll" }}>
                {Stories.map((red, i) => (
                        <NewsStory key={i} id={"newsstory"+i}>
                            <h3>{red.headline}</h3>
                            <p>{red.date}</p>
                            <p>{red.description}</p>
                            <a href={red.link}>READ MORE</a>
                        </NewsStory>
                    ))}
                </div>
                <a href="#newsstory5"><Arrow href="#newsstory1" style={{backgroundImage: "url(./images/arrowright.png)"}}></Arrow></a>
            </div>
        );
    }
}
export default News;
