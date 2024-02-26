import { SquareUser, HistoryIcon, PlaySquare, Clock, ThumbsUp, Flame, ShoppingBag, Music2, Clapperboard, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Podcast, Youtube } from "lucide-react";
import { ReactNode } from "react";

export const sideMenuIcons: { [key: string]: ReactNode | null } = {
  "Seu canal": <SquareUser size={21.5} />,
  Histórico: <HistoryIcon size={21.5} />,
  "Seus vídeos": <PlaySquare size={21.5} />,
  "Assistir mais tarde": <Clock size={21.5} />,
  'Videos marcados com "Gostei"': <ThumbsUp size={21.5} />,
  "Canal 1": <img src="https://cdn.pixabay.com/photo/2012/07/26/20/55/barrels-52934_1280.jpg" className="rounded-full h-[21.5px] w-[21.5px]"/>,
  "Canal 2": <img src="https://cdn.pixabay.com/photo/2017/06/24/23/41/beer-2439237_1280.jpg" className="rounded-full h-[21.5px] w-[21.5px]"/>,
  "Canal 3": <img src="https://cdn.pixabay.com/photo/2016/07/15/09/05/factory-1518504_1280.jpg" className="rounded-full h-[21.5px] w-[21.5px]"/>,
  "Em alta": <Flame size={21.5} />,
  Shopping: <ShoppingBag size={21.5} />,
  Música: <Music2 size={21.5} />,
  Filmes: <Clapperboard size={21.5} />,
  "Ao vivo": <Radio size={21.5} />,
  Jogos: <Gamepad2 size={21.5} />,
  Notícias: <Newspaper size={21.5} />,
  Esportes: <Trophy size={21.5} />,
  Aprender: <Lightbulb size={21.5} />,
  Podcasts: <Podcast size={21.5} />,
  "Youtube Premium": <Youtube size={21.5} />,
  "Youtube Studio": <Youtube size={21.5} />,
  "Youtube Music": <Youtube size={21.5} />,
  "Youtube Kids": <Youtube size={21.5} />,
};