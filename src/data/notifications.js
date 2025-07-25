// Import all the images
import avatarMarkWebber from "../assets/images/avatar-mark-webber.webp";
import avatarAngelaGray from "../assets/images/avatar-angela-gray.webp";
import avatarJacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import avatarRizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import avatarKimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import avatarNathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import avatarAnnaKim from "../assets/images/avatar-anna-kim.webp";
import imageChess from "../assets/images/image-chess.webp";

export const notifications = [
  {
    id: 1,
    user: "Mark Webber",
    action: "reacted to your recent post",
    target: "My first tournament today!",
    time: "1m ago",
    avatar: avatarMarkWebber,
    isUnread: true,
  },
  {
    id: 2,
    user: "Angela Gray",
    action: "followed you",
    time: "5m ago",
    avatar: avatarAngelaGray,
    isUnread: true,
  },
  {
    id: 3,
    user: "Jacob Thompson",
    action: "has joined your group",
    target: "Chess Club",
    time: "1 day ago",
    avatar: avatarJacobThompson,
    isUnread: true,
  },
  {
    id: 4,
    user: "Rizky Hasanuddin",
    action: "sent you a private message",
    time: "5 days ago",
    avatar: avatarRizkyHasanuddin,
    isUnread: false,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: 5,
    user: "Kimberly Smith",
    action: "commented on your picture",
    time: "1 week ago",
    avatar: avatarKimberlySmith,
    image: imageChess,
    isUnread: false,
  },
  {
    id: 6,
    user: "Nathan Peterson",
    action: "reacted to your recent post",
    target: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    avatar: avatarNathanPeterson,
    isUnread: false,
  },
  {
    id: 7,
    user: "Anna Kim",
    action: "left the group",
    target: "Chess Club",
    time: "2 weeks ago",
    avatar: avatarAnnaKim,
    isUnread: false,
  },
];
