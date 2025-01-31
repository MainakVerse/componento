'use client'
import React, { useState } from 'react'
import {
  WhatsappShareButton, TwitterShareButton, LinkedinShareButton,
  FacebookShareButton, EmailShareButton, TelegramShareButton, RedditShareButton,
  WhatsappIcon, XIcon, LinkedinIcon, FacebookIcon, EmailIcon, TelegramIcon, RedditIcon
} from "react-share";
import DevClipboardV1 from '../../clipboards/(dev-clipboard-v1)/dev-clipboard-v1';


const ReactShare = ({ shareUrl, size = 25, setUrl, isRounded = true }) => {
  const [copy, setCopy] = useState(false) //for Clipboard
  const shareConfig = [
    {
      shareWrapper: WhatsappShareButton,
      shareIcon: WhatsappIcon,
    },
    {
      shareWrapper: TwitterShareButton,
      shareIcon: XIcon,
    },
    {
      shareWrapper: LinkedinShareButton,
      shareIcon: LinkedinIcon,
    },
    {
      shareWrapper: FacebookShareButton,
      shareIcon: FacebookIcon,
    },
    {
      shareWrapper: TelegramShareButton,
      shareIcon: TelegramIcon,
    },
    {
      shareWrapper: RedditShareButton,
      shareIcon: RedditIcon,
    },
    {
      shareWrapper: EmailShareButton,
      shareIcon: EmailIcon,
    }
  ]

  return (
    <div className='w-full md:max-w-sm bg-LIGHT p-3 dark:bg-DARK border border-ACCENT/50 rounded-xl'>
      <span className='flex items-center gap-1 p-1 rounded-full border border-ACCENT/50'>
        <input
          type="text"
          value={shareUrl}
          onChange={(e) => setUrl(e.target.value)}
          className='p-1 px-2 outline-0 border-none bg-transparent flex-1'
          placeholder="Copy link"
        />
        <DevClipboardV1 setCopied={setCopy} className='bg-ACCENT text-white rounded-full p-1 px-3 active:opacity-80' textClip={shareUrl}>
          {copy ? "Copied" : "Copy url"}
        </DevClipboardV1>
      </span>
      <div role="icon-group" className='flex flex-wrap gap-2 mt-2'>
        {shareConfig && shareConfig.map((share, index) => (
          <share.shareWrapper url={shareUrl} key={index} >
            <share.shareIcon className="border border-ACCENT/50 hover:border-ACCENT rounded-full p-[2px] hover:scale-105 transition-all" size={size} round={isRounded} />
          </share.shareWrapper>
        ))}
      </div>
    </div>
  )
}

export default ReactShare