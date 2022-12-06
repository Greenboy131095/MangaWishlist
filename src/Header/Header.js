
import React, {useState, useEffect} from 'react';
import { HiMenu } from 'react-icons/hi';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import { IconButton } from '@material-ui/core';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Sidebar from "../Sidebar/Sidebar"
import { AiFillCloseCircle } from 'react-icons/ai';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

let a="";
const Header = ({backButtons}) => {
  const [search,setSearch]=useState('');
  const history = useNavigate();
  const [peoples, setPeoples]=useState([
      {"id": 1,
        "name": "Solo Leveling",
        "alternateName": "Na Honjaman Level-Up, Only I Level Up",
        "description": "E-class hunter Jinwoo Sung is the weakest of them all. Looked down on by everyone, he has no money, no abilities to speak of, and no other job prospects. So when his party finds a hidden dungeon, he's determined to use this chance to change his life for the better... but the opportunity he finds is a bit different from what he had in mind!",
        "url": "https://upload.wikimedia.org/wikipedia/en/9/99/Solo_Leveling_Webtoon.png"
      },
      {
        "id": 2,
        "name": "Berserk",
        "alternateName": "",
        "description": "Born beneath the gallows tree from which his dead mother hung, Guts has always existed on the boundary between life and death. After enduring a terrible childhood, he spends his adulthood in brutal combat, pitting his strength against others in order to build his own. Life is simple enough for Guts until he meets Griffith, the inspirational, ambitious, and beautiful leader of the mercenaries, the Band of the Hawk. When Guts loses to Griffith in a duel, he is forced to join the Band of the Hawk, and, despite himself, finds a sense of camaraderie and belonging amongst them. However, as Griffith leads his soldiers from victory to victory, the bloody wars and underhanded politics reveal a side to him that nobody quite expected. Very soon, what seems like a straightforward march for conquest becomes a harrowing struggle for humanity and life itself. Can Guts, a simple warrior, defend those who have come to mean the most to him, all the while struggling not to lose to the darkness he has carried with him his entire life?",
        "url": "https://upload.wikimedia.org/wikipedia/en/3/33/Berserk_2016_anime_key_art.jpg"
      },
      {
        "id": 3,
        "name": "One Piece",
        "alternateName": "",
        "description": "Long ago the infamous Gol D. Roger was the strongest and most powerful pirate on the seas. As he was about to be executed he revealed that he hid all of his wealth, including the legendary treasure known as One Piece, on an island at the end of the Grand Line - a treacherous and truly unpredictable sea. Monkey D. Luffy is a spirited, energetic and somewhat dim-witted young man with a very big dream: to find One Piece and become the Pirate King! However Luffy is no ordinary boy, as when he was younger he ate one of the Devil's Fruits and gained its power to become a Rubber Man. Now in this grand age of pirates Luffy sets out to gather a crew and sail to the most dangerous sea in the world so that he can fulfill his dream... and maybe even his appetite!",
        "url": "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"
      },
      {
        "id": 4,
        "name": "The Beginning After the End",
        "alternateName": "",
        "description": "King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous exterior of a powerful king lurks the shell of man, devoid of purpose and will. Reincarnated into a new world filled with magic and monsters, the king has a second chance to relive his life. Correcting the mistakes of his past will not be his only challenge, however. Underneath the peace and prosperity of the new world is an undercurrent threatening to destroy everything he has worked for, questioning his role and reason for being born again.",
        "url": "https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal123.jpg"
      },
      {
        "id": 5,
        "name": "Fullmetal Alchemist",
        "alternateName": "",
        "description": "The first law of alchemy is that \"one cannot gain something without giving something of equal value in return\" - a rule that two souls dare to cross. When Edward and Alphonse Elric try to revive their dead mother, breaking the taboo of human transmutation in process, Ed loses his right arm and left leg while Al loses his entire body. After the tragedy, an alchemist named Roy Mustang visits them and tells Edward to become a state alchemist to find a way to recover what they have lost. Accompanied by Al, whose soul is now attached to a metal suit of armor, Ed is fitted with auto-mail parts in place of his lost limbs and becomes a state alchemist by the name of \"Full Metal Alchemist.\" Together, they set forth on a journey to find the Philosopher's Stone - the one item that is rumored to have the power to restore them.",
        "url": "https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal123.jpg"
      },
      {
        "id": 6,
        "name": "JoJo's Bizzare Adventure Part 7: Steel Ball Run",
        "alternateName": "Jojo no Kimyou na Bouken: Steel Ball Run",
        "description": "Set in 1890, Steel Ball Run spotlights Gyro Zepelli and Johnny Joestar as they pit their spirits on a Fifty Million Dollar race across the heart of America. Their track quickly becomes a no-rules land as the racers' dreams collide and only human will spurs them on. But there is more to this race than any contestant realized and each of them soon grasps the real size of their world.",
        "url": "https://upload.wikimedia.org/wikipedia/en/f/f7/JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg"
      },
      {
        "id": 7,
        "name": "One Punch Man",
        "alternateName": "",
        "description": "In a city plagued with thugs, mutants, and supervillains, Saitama decides to become a superhero for fun. He envisions an exciting life where he is constantly challenged with tough opponents, but after three years of intense training, he's become so strong that he defeats every enemy with one punch! His dream of engaging challenging foes has gone up in smoke, and his overpowered life is filled with overpowering boredom. Then a cyborg named Genos learns about Saitama's amazing ability and begs him to make him his disciple. Saitama isn't interested in taking on an apprentice, but Genos isn't giving up. Can he convince the disillusioned hero to teach him the secret of his strength? And will Saitama ever find a worthy adversary to battle?",
        "url": "https://upload.wikimedia.org/wikipedia/en/c/c3/OnePunchMan_manga_cover.png"
      },
      {
        "id": 8,
        "name": "Akuyaku Reijou no Naka no Hito",
        "alternateName": "The One Within the Villainess",
        "description": "In order to clear the name of 'Emi,' who had reincarnated as the villainess, Remilia, the real Remilia who had been watching all along inside awakens. Now it's time for the true villainess' revenge to begin!",
        "url": "https://upload.wikimedia.org/wikipedia/en/f/f4/I%27m_the_Villainess%2C_So_I%27m_Taming_the_Final_Boss_light_novel_volume_1_cover.jpg"
      },
      {
        "id": 9,
        "name": "Vagabond",
        "alternateName": "",
        "description": "Following a horrific defeat at the battle of Sekigahara, two survivors, Takezo Shinmen and Matahachi Hon’iden, are deflated at having been unable to make a name for themselves and earn glory on the battlefield. But while Matahachi is anxious to go home, Takezo has vowed never to return and intends to become a vagabond, travelling the country polishing and testing his skills as a swordsman. With a beastial mercilessness when it comes to killing and a habit of cutting down all in his path, it doesn’t take long for Takezo to become a wanted fugitive. However, after being captured by a monk named Takuan and given a new lease of life, Takezo begins to live under the name of Musashi Miyamoto. Now, with a new view on life and death, Musashi continues to travel the nation challenging the most infamous fighters to achieve his goal of becoming the strongest samurai ever known.",
        "url": "https://en.wikipedia.org/wiki/Vagrancy#/media/File:John_Everett_Millais_-_The_Blind_Girl,_1854-56.jpg"
      },
      {
        "id": 10,
        "name": "Haikyuu",
        "alternateName": "",
        "description": "After losing his first and last volleyball match against Tobio Kageyama, \"the King of the Court,\" Shoyo Hinata swears to become his rival after graduating middle school. But what happens when the guy he wants to defeat ends up being his teammate?!",
        "url": "https://upload.wikimedia.org/wikipedia/en/6/6b/Haikyū_Volume_1.jpg"
      },
      {
        "id": 11,
        "name": "That Time I Got Reincarnated as a Slime",
        "alternateName": "Tensei Shitara Slime datta Ken",
        "description": "Mikami’s middle age hasn’t gone as he planned: He never found a girlfriend, he got stuck in a dead-end job, and he was abruptly stabbed to death in the street at 37. So when he wakes up in a new world straight out of a fantasy RPG, he’s disappointed but not exactly surprised to find that he’s not a knight or a wizard but a blind slime demon. But there are chances for even a slime to become a hero…",
        "url": "https://upload.wikimedia.org/wikipedia/en/8/8c/That_Time_I_Got_Reincarnated_as_a_Slime_light_novel_volume_1_cover.jpg"
      },
      {
        "id": 12,
        "name": "Spy X Family",
        "alternateName": "",
        "description": "Master spy Twilight is the best at what he does when it comes to going undercover on dangerous missions in the name of a better world. But when he receives the ultimate impossible assignment—get married and have a kid—he may finally be in over his head! Not one to depend on others, Twilight has his work cut out for him procuring both a wife and a child for his mission to infiltrate an elite private school. What he doesn’t know is that the wife he’s chosen is an assassin and the child he’s adopted is a telepath!",
        "url": "https://upload.wikimedia.org/wikipedia/en/5/51/Spy_Family_vol_1.jpg"
      },
      {
        "id": 13,
        "name": "Yona of the Dawn",
        "alternateName": "Akatsuki no Yona",
        "description": "Princess Yona lived a happy life with her peace-loving father, King Il. Surrounded by attentive servants and protected by her smart-mouthed bodyguard, Hak, Yona's only difficulties in life were her unruly red hair and trying to convince her father to let her marry her cousin, Soo-wan. Then one day a betrayal in the palace causes Yona to lose everything, turning her into an exile with no one left but Hak to defend her. Yona is determined to become strong in her own right and defeat those who wronged her, and an ancient legend involving the Crimson Dragon King and his four Dragon Warriors may be her key to reclaiming her kingdom. ",
        "url": "https://upload.wikimedia.org/wikipedia/en/2/2f/Akatsuki001.jpg"
      },
      {
        "id": 14,
        "name": "Demon Slayer: Kimetsu no Yaiba",
        "alternateName": "",
        "description": "The setting is Taisho era Japan. Tanjirou is a kindhearted young boy who lived peacefully with his family as a coal seller. Their normal life changes completely when his family is slaughtered by demons. The only other survivor, Tanjirou's younger sister Nezuko, has become a ferocious demon. In order to return Nezuko to normal and get revenge on the demon that killed their family, the two of them depart on a journey. From a young talent, an adventure tale of blood and swords begins!",
        "url": "https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg"
      },
      {
        "id": 15,
        "name": "Jujutsu Kaisen",
        "alternateName": "Sorcery Fight",
        "description": "Although Yuji Itadori looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Research Club. One day, the club manages to get their hands on a sealed cursed object. Little do they know the terror they’ll unleash when they break the seal…",
        "url": "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg"
      },
      {
        "id": 16,
        "name": "Bungo Stray Dogs",
        "alternateName": "",
        "description": "Having been kicked out of the orphanage, a despairing young man by the name of Atsushi Nakajima rescues a strange man from a suicide attempt--Osamu Dazai. Turns out that Dazai is part of an armed-detective agency staffed by individuals whose supernatural powers take on a literary bent!",
        "url": "https://upload.wikimedia.org/wikipedia/en/f/f8/Bungō_Stray_Dogs_volume_1.jpg"
      },
      {
        "id": 17,
        "name": "Chainsaw Man",
        "alternateName": "",
        "description": "Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!",
        "url": "https://upload.wikimedia.org/wikipedia/en/2/24/Chainsawman.jpg"
      },
      {
        "id": 18,
        "name": "The Apothecary Diaries",
        "alternateName": "Kusuriya no Hitorigoto",
        "description": "Maomao, a young woman trained in the art of herbal medicine, is forced to work as a lowly servant in the inner palace. Though she yearns for life outside its perfumed halls, she isn’t long for a life of drudgery! Using her wits to break a “curse” afflicting the imperial heirs, Maomao attracts the attentions of the handsome eunuch Jinshi and is promoted to attendant food taster. But Jinshi has other plans for the erstwhile apothecary, and soon Maomao is back to brewing potions and…solving mysteries?!",
        "url": "https://upload.wikimedia.org/wikipedia/en/3/33/Kusuriyaaaa.jpg"
      },
      {
        "id": 19,
        "name": "Welcome to Demon School, Iruma-kun",
        "alternateName": "Mairimashita! Iruma-kun",
        "description": "Iruma Suzuki has always been eager to please, even at the cost of his well-being. Worst yet, he’s the son of two selfish parents who end up selling him to a demon. Thanks to their totally irresponsible actions, Iruma has found himself living in the Netherworld, where he must live and attend school as the grandson of an older demon. Luckily, his new, doting grandfather is there to help, but Iruma will have to figure out how to blend in with his demonic classmates or risk getting eaten. All he needs to do is subjugate rival classmates, summon familiars, and do other typical demon things while never revealing that he’s human… Piece of cake, right?",
        "url": "https://upload.wikimedia.org/wikipedia/en/9/99/Mairimashita%21_Iruma-kun_volume_1_cover.jpg"
      },
      {
        "id": 20,
        "name": "Attack on Titan",
        "alternateName": "Shingeki no Kyojin",
        "description": "Over a century ago, mankind was devoured by giant beings of unknown intelligence and origin known as Titans – creatures that eat humans alive indiscriminately and for no apparent reason. The remaining population has managed to survive the last hundred years only by building a multi-walled city capable of keeping the Titans at bay, training military recruits to patrol the perimeter and gather intelligence about their mysterious foe. Eren and Mikasa have lived a relatively peaceful life behind the city's walls, but when a massive Titan appears, smashing the outer barrier and unleashing a wave of terror, their lives are brutally changed forever...",
        "url": "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg"
      },
      {
        "id": 21,
        "name": "Nausicaa of the Valley of the Wind",
        "alternateName": " Kaze no Tani no Nausicaa",
        "description": "One thousand years ago when humanity was at its peak, the world was destroyed by in an event known as the ‘Seven Days of Fire’. In the centuries that followed, nature took over leaving humans living in fear of a toxic jungle and the giant insects that protect it. Amongst this threat of disease lives Nausicaä, the young princess of a province known as the Valley of the Wind, who possesses a kind heart and an inexplicable ability to commune with the natural world. While all the young girl wishes is for the world to live in peace, her normally quiet land finds itself dragged into war alongside the battle-hungry Torumekian soldiers. Now, Nausicaä must fight for peace and attempt to find a way to save both humans and insects without losing herself to hatred.",
        "url": "https://upload.wikimedia.org/wikipedia/en/c/c3/NausicaaCoverTankobon1.png"
      },
      {
        "id": 22,
        "name": "JoJo's Bizarre Adventure Part 4: Diamond is Unbreakable",
        "alternateName": " JoJo no Kimyou na Bouken: Diamond wa Kudakenai",
        "description": "In April 1999, Jotaro Kujo travels to a town in Japan called Morioh to find a young man named Josuke Higashikata, the secret love child of his grandfather, Joseph Joestar. Upon finding him, Jotaro is surprised to learn that Josuke also possesses a Stand. After their strange meeting, the pair team up to investigate the town’s proliferation of unusual Stands!",
        "url": "https://upload.wikimedia.org/wikipedia/en/b/b6/Jojo36.jpg"
      },
      {
        "id": 23,
        "name": "Kaichou wa Maid-sama! Marriage",
        "alternateName": "",
        "description": "Compilation of side stories from the Kaicho wa Maid-sama! series",
        "url": "https://en.wikipedia.org/wiki/Snow_White_with_the_Red_Hair#/media/File:Akagami_no_Shirayukihime_volume_1_cover.jpg"
      },
      {
        "id": 24,
        "name": "Daytime Star",
        "alternateName": "",
        "description": "A struggling, no-name actress of seven years, Yura Hwang. She barely lands a minor role in a movie that’s bound to be a success. A celebrity’s celebrity, Seunghyeon Kang, keeps running into Yura, who always seems to be shedding tears every time he comes across her. As these two reunite in the new movie, “Time,” will Yura finally seize the moment to make her name known? And will Seunghyeon figure out why he can’t get Yura out of his mind? Only time will tell.",
        "url": "https://en.wikipedia.org/wiki/Daytime_Shooting_Star#/media/File:Hirunaka_no_ryuusei.jpg"
      },
      {
        "id": 25,
        "name": "Jujutsu Kaisen 0",
        "alternateName": "Jujutsu Kaisen 0: Toritsu Jujutsu Koutou Senmon Gakkou",
        "description": "The one-shot pilot of the supernatural exorcist adventure Jujutsu Kaisen! The story takes place a one year before Itadori's time, focusing on his upperclassmen at Jujutsu High--Maki, Panda, Toge and Yuta Okkotsu (the MC). In Jujutsu Kaisen, we don't see Yuta, but other characters often make reference to him and the incidents that occur in this volume. Yuta's been brought in to Jujutsu High by Satoru Gojo because he's been cursed by his childhood friend, Rika. But this is no ordinary curse as she's classified Special Grade. And because of her overwhelming strengh, Yuta doesn't know how to control or use her. Meanwhile, Suguru Geto is out to get Yuta Okkotsu, specifically targeting Rika to add to his own collection of cursed spirits he controls, setting up a showdown with his best friend-turned-enemy, Gojo.",
        "url": "https://en.wikipedia.org/wiki/Jujutsu_Kaisen_0_(film)#/media/File:Gekijō-ban_Jujutsu_Kaisen_0.png"
      },
      {
        "id": 26,
        "name": "That Time I Got Reincarnated as a Slime (Light Novel)",
        "alternateName": "Tensei Shitara Slime Datta Ken (Light Novel)",
        "description": "Lonely thirty-seven-year-old Satoru Mikami is stuck in a dead-end job, unhappy with his mundane life, but after dying at the hands of a robber, he awakens to a fresh start in a fantasy realm...as a slime monster! As he acclimates to his goopy new existence, his exploits with the other monsters set off a chain of events that will change his new world forever!",
        "url": "https://upload.wikimedia.org/wikipedia/en/8/8c/That_Time_I_Got_Reincarnated_as_a_Slime_light_novel_volume_1_cover.jpg"
      },
      {
        "id": 27,
        "name": "Horimiya",
        "alternateName": "",
        "description": "Kyouko and Izumi are two classmates who each lead a double life: the popular and talented Kyouko cares for her little brother by herself while her parents are away, and the quiet, bespectacled Izumi hides his many piercings and tattoos at school. After accidentally discovering each other's secrets the pair becomes fast friends, and together, they begin to navigate their new relationship together amongst unknowing peers and love rivals alike.",
        "url": "https://upload.wikimedia.org/wikipedia/en/4/46/Hori-san_to_Miyamura-kun_volume_1_cover.jpg"
      },
      {
        "id": 28,
        "name": "Tokyo Ghoul",
        "alternateName": "Tokyo Kushu",
        "description": "Shy Ken Kaneki is thrilled to go on a date with the beautiful Rize. But it turns out that she’s only interested in his body—eating it, that is. When a morally questionable rescue transforms him into the first half-human half-Ghoul hybrid, Ken is drawn into the dark and violent world of Ghouls, which exists alongside our own.",
        "url": "https://en.wikipedia.org/wiki/Tokyo_Ghoul#/media/File:Tokyo_Ghoul_volume_1_cover.jpg"
      },
      {
        "id": 29,
        "name": "Kaguya-sama: Love Is War",
        "alternateName": "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
        "description": "As leaders of their prestigious academy’s student council, Kaguya and Miyuki are the elite of the elite! But it’s lonely at the top… Luckily for them, they’ve fallen in love! There’s just one problem—they both have too much pride to admit it. And so begins the daily scheming to get the object of their affection to confess their romantic feelings first…Love is a war you win by losing.",
        "url": "https://upload.wikimedia.org/wikipedia/en/8/86/Kaguya-sama_-_Love_is_War%2C_volume_1.jpg"
      },
      {
        "id": 30,
        "name": "Tokyo Revengers",
        "alternateName": "",
        "description": "Watching the news, Takemichi Hanagaki learns that his girlfriend from way back in middle school, Hinata Tachibana, has died. The only girlfriend he ever had was just killed by a villainous group known as the Tokyo Manji Gang. He lives in a crappy apartment with thin walls, and his six-years-younger boss treats him like an idiot. Plus, he’s a complete and total virgin … At the height of his rock-bottom life, he suddenly time-leaps twelve years back to his middle school days!! To save Hinata, and change the life he spent running away, hopeless part-timer Takemichi must aim for the top of Kanto’s most sinister delinquent gang!!",
        "url": "https://upload.wikimedia.org/wikipedia/en/b/b1/Tokyo_Revengers_volume_1_cover.jpg"
      },
      {
        "id": 31,
        "name": "Hajime no Ippo",
        "alternateName": "",
        "description": "Ippo Makunouchi is an average and overly-shy high school teenager. His mother runs a fish boat shop and he constantly has to help her with it, and thus has no friends. Constantly bullied because of this, Ippo wonders what it would be like to be strong. A chance encounter with Takamura Mamoru, an up and coming boxer in the Japanese ranks, leads to Ippo's revelation that he has an incredible punch. Takamura sees potential in Ippo, and brings him into Kamogawa Gym. Thus begins Ippo's journey to discover just what it's like to be a winner. With a fighting spirit, can Ippo eventually become a professional boxer?",
        "url": "https://upload.wikimedia.org/wikipedia/en/8/86/HajimenoIppo_vol1_Cover.jpg"
      },
      {
        "id": 32,
        "name": "Ouran High School Host Club",
        "alternateName": "Ouran Koukou Host-bu",
        "description": "Ouran High School is a prestigious private academy where money and status count for everything. Haruhi Fujioka is a scholarship student at the elite school, and is appalled by the lazy attitude of the rich and powerful students towards their studies. The Host Club is a clear example of this: a group of six attractive and wealthy boys spend their time entertaining the female pupils for a profit. When Haruhi accidentally breaks a ¥8,000,000 vase belonging to the club, they force her to work off her debt as one of the club's members; and to do so, she must masquerade as a boy! Can Haruhi keep her gender a secret from the club's exclusive clients?",
        "url": "https://upload.wikimedia.org/wikipedia/en/d/dc/Ouran_High_School_Vol_1_cover.jpg"
      },
      {
        "id": 33,
        "name": "Re:ZERO -Starting Life in Another World- (Light Novel)",
        "alternateName": "Re:ZERO Kara Hajimeru Isekai Seikatsu (Light Novel)",
        "description": "Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
        "url": "https://upload.wikimedia.org/wikipedia/en/d/dc/Ouran_High_School_Vol_1_cover.jpg"
      },
      {
        "id": 34,
        "name": "Violet Evergarden (Light Novel)",
        "alternateName": "",
        "description": "As a child, Violet was used by the military as a weapon because of her combat prowess. Her one friend and protector was Major Gilbert, who named the girl, taught her how to speak and write, and cared for her. But after being seriously injured in the war, losing both arms in the process, Violet is brought to the Evergarden household to recuperate. There, she trains to become an Auto Memories Doll: a person who writes letters for others, deciphering their true feelings and expressing it on paper. As Violet travels the world, she helps her clients find love and comfort through the letters she writes; but more importantly, she slowly begins to understand emotions, so that she can finally cope with what she’s done, and what she’s lost.",
        "url": "https://en.wikipedia.org/wiki/Violet_Evergarden:_The_Movie#/media/File:Violet_Evergarden_the_Movie_poster.jpg"
      },
      {
        "id": 35,
        "name": "Hunter x Hunter",
        "alternateName": "",
        "description": "Drawn to the mystique of the unknown, Hunters travel the world in search of terrifying creatures, incredible riches, and unexplored lands. Gon Freecss is a naive-yet-determined young boy who aspires to join the ranks of these individuals, in order to find his missing father Ging - a master of the profession himself. To reach his goal, he partakes in the formidable Hunter Exam, a series of tests that push the participants to their physical and mental limits, with a Hunter License as the prize. During the exam Gon befriends vengeful Kurapika, doctor-to-be Leorio, and skilled assassin Killua, who have entered for their own reasons. But with the sinister Hisoka standing in their way, will Gon and his friends be able to succeed in obtaining their reward, or even escaping with their lives?",
        "url": "https://upload.wikimedia.org/wikipedia/en/0/0f/Hunter_x_Hunter_cover_-_vol1.jpg"
      },
      {
        "id": 36,
        "name": "The Case Study of Vanitas",
        "alternateName": " Vanitas no Carte",
        "description": "Rumors revolving around The Book of Vanitas, a clockwork grimoire of dubious reputation, draw Noé, a young vampire in search of a friend's salvation, to Paris. What awaits him in the City of Flowers, however, is not long hours treading the pavement or rifling through dusty bookshops in search of the tome. Instead, his quarry comes to him...in the arms of a man claiming to be a vampire doctor! Thrust into a conflict that threatens the peace between humans and vampires, will Noé cast in his lot with the curious and slightly unbalanced Vanitas and his quest to save vampirekind?",
        "url": "https://en.wikipedia.org/wiki/The_Case_Study_of_Vanitas#/media/File:The_Case_Study_of_Vanitas_volume_1_cover.jpg"
      },
      {
        "id": 37,
        "name": "My Hero Academia",
        "alternateName": "Boku no Hero Academia",
        "description": "Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn’t got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all, gives him a chance to change his destiny…",
        "url": "https://en.wikipedia.org/wiki/The_Case_Study_of_Vanitas#/media/File:The_Case_Study_of_Vanitas_volume_1_cover.jpg"
      },
      {
        "id": 38,
        "name": "Wotakoi: Love is Hard for Otaku",
        "alternateName": "Wotaku ni Koi wa Muzukashii",
        "description": "Narumi Momose has had it rough: every boyfriend she’s had dumped her once they found out she was an otaku, so she’s gone to great lengths to hide it. When a chance meeting at her new job with childhood friend, fellow otaku, and now coworker Hirotaka Nifuji almost gets her secret outed at work, she comes up with a plan to make sure he never speaks up. But he comes up with a counter-proposal: why doesn’t she just date him instead? In love, there are no save points.",
        "url": "https://en.wikipedia.org/wiki/Wotakoi:_Love_Is_Hard_for_Otaku#/media/File:Otaku_ni_Koi_wa_Muzukashii,_Volume_1.jpg"
      },
      {
        "id": 39,
        "name": "My Neighbor Totoro",
        "alternateName": "Tonari no Totoro",
        "description": "Satsuki, her younger sister Mei and their father have just moved to their new home in the countryside, where grand adventures await them. One day while playing outside in the garden Mei encounters a small creature and decides to follow it. After chasing it through the bushes Mei eventually finds herself at the base of a large Camphor tree and as she drops through a hole in its roots, she lands on the stomach of a large, sleeping forest spirit named Totoro. The two sisters befriend the gentle spirit and are soon introduced to a world more fantastical than they could ever imagine, from playing with soot spirits to meeting a Catbus, to flying through the air and even making the trees grow. However when Mei disappears, Satsuki must call on the help of her new friends if she wants any hope of being able to find her sister...",
        "url": "https://en.wikipedia.org/wiki/My_Neighbor_Totoro#/media/File:My_Neighbor_Totoro_-_Tonari_no_Totoro_(Movie_Poster).jpg"
      },
      {
        "id": 40,
        "name": "KonoSuba: God's Blessing on This Wonderful World! (Light Novel)",
        "alternateName": "Kono Subarashii Sekai ni Shukufuku wo! (Light Novel)",
        "description": "Game loving shut-in Kazuma Sato's life as a young schoolboy in Japan abruptly comes to an early end...or at least it was supposed to. When he opens his eyes, though, he sees a beautiful goddess that offers him a once in an after-lifetime chance to be reborn in a parallel world. The catch is that the world is violent and threatened by a growing evil! Fortunately, he can choose any one thing to bring with him. So he chooses the goddess, Aqua! And so his adventure with his gorgeous companion begins--if he could just get enough money and food to survive, keep his goddess out of trouble, and avoid grabbing the attention of the Demon King's army!",
        "url": "https://en.wikipedia.org/wiki/KonoSuba#/media/File:Kono_Subarashii_Sekai_ni_Shukufuku_o!_light_novel_volume_1_cover.jpg"
      },
      {
        "id": 41,
        "name": "Kingdom",
        "alternateName": "",
        "description": "Millions of years have passed since the times of legends, when the worlds of man and gods were still the same. In these times it was the desires of man that moved the world. It is the era of the 500 year war: The warring states period. Kingdom is the story of a young boy named Shin who grew into a great general and all the trials and bloodshed that lead him there",
        "url": "https://en.wikipedia.org/wiki/Kingdom_(Koda_Kumi_album)#/media/File:Kkkcd.jpg"
      },
      {
        "id": 42,
        "name": "Toilet-Bound Hanako-kun",
        "alternateName": "Jibaku Shounen Hanako-kun",
        "description": "\"Hanako-san, Hanako-san... are you there?\" At Kamome Academy, rumors abound about the school's Seven Mysteries, one of which is Hanako-san. Said to occupy the third stall of the third floor girls' bathroom in the old school building, Hanako-san grants any wish when summoned. Nene Yashiro, an occult-loving high school girl who dreams of romance, ventures into this haunted bathroom... but the Hanako-san she meets there is nothing like she imagined! Kamome Academy's Hanako-san... is a boy!",
        "url": "https://upload.wikimedia.org/wikipedia/en/4/44/Toilet-Bound_Hanako-kun_volume_1_cover.jpg"
      },
      {
        "id": 43,
        "name": "Sengoku Komachi Kuroutan: Noukou Giga",
        "alternateName": "",
        "description": "One fateful day, a girl time slipped into the Sengoku Era. It was an abrupt enough event to be dubbed god’s whim, done to sate hellish boredom. The girl has no power to change the world. She was a very ordinary, common, and plain girl that can be found anywhere. And that girl can do no more than a single thing. Survive the Sengoku Era ——– that’s all.",
        "url": "https://upload.wikimedia.org/wikipedia/en/2/2d/Bartender_%28manga%29_vol01_cover.jpg"
      },
      {
        "id": 44,
        "name": "So I'm a Spider, So What? (Light Novel)",
        "alternateName": "Kumo desu ga, Nani ka? (Light Novel)",
        "description": "I used to be a normal high school girl but in the blink of an eye, I woke up in a place I've never seen before and-and I was reborn as a spider?! How could something that's nothing more than a tiny spider (that's me) possibly survive in literally the worst dungeon ever? Are there no rules? There should be some rules! Who the hell is responsible for this? SHOW YOUR FACE!",
        "url": "https://en.wikipedia.org/wiki/So_I%27m_a_Spider,_So_What%3F#/media/File:So_Im_a_Spider,_So_What?,_volume_1.jpg"
      },
      {
        "id": 45,
        "name": "Kaoru Hana Wa Rin To Saku",
        "alternateName": "",
        "description": "In a certain place, there are two neighboring high schools. Chidori High School, a bottom-feeder boys school where idiots gather, and Kikyo Girls School, a well-established girls school. Rintaro Tsumugi, a strong and quiet second year student at Chidori High School, meets Kaoruko Wakuri, a girl who comes as a customer while helping out at his familys cake shop. Rintaro feels comfortable spending time with Kaoruko, but she is a student at Kikyo Girls, a neighboring school that thoroughly dislikes Chidori High. This is the story of two people who are so close and yet so far apart.",
        "url": "https://en.wikipedia.org/wiki/So_I%27m_a_Spider,_So_What%3F#/media/File:So_Im_a_Spider,_So_What?,_volume_1.jpg"
      },
      {
        "id": 46,
        "name": "After-School Hanako-kun",
        "alternateName": "Houkago Shounen Hanako-kun",
        "description": "The ghostly Hanako-kun and his mortal assistant Nene Yashiro usually have their hands full resolving various supernatural incidents in Kamome Academy, but how do they spend their time when they get a break from all that? Come and see what the characters of Toilet-bound Hanako-kun do on their laid-back afterschool days!",
        "url": "https://en.wikipedia.org/wiki/Megumi_Ogata#/media/File:Megumi_Ogata.jpg"
      },
      {
        "id": 47,
        "name": "Gintama",
        "alternateName": "",
        "description": "It is the Edo period, an era when samurai are still of great importance - at least they used to be, until all sorts of aliens called the Amanto decided to take over the government and revolutionize Japan so it wouldn't be so uncivilized. In Edo, now a city where anachronism is the rule rather than the exception, Gintoki, a former samurai, tries to make a living doing odd jobs. During the course of his work, Shinpachi, a would-be samurai; and Kagura, an absurdly strong girl, join him. Of course, he has them work for free, how else would Gintoki be able to buy Shonen Jump and strawberry milk, let alone pay for unimportant things like rent if he has to support someone other than himself?",
        "url": "https://en.wikipedia.org/wiki/Gin_Tama#/media/File:Gintamavol01cover.jpg"
      },
      {
        "id": 48,
        "name": "Tower of God",
        "alternateName": "Sinui Tap",
        "description": "Fame. Glory. Power. Anything in your wildest dreams is possible when you reach the top of the Tower of God. Those lucky enough to be chosen by the tower ascend each floor in hopes of fulfilling their dreams, but to succeed, they must complete dangerous and deadly tests along the way. But there are others who can enter the structure on their own free will; these \"irregulars\" are feared by many and are said to leave chaos and change in their wake. Twenty-Fifth Baam is one such irregular who begins to climb the Tower of God in hopes of reuniting with his childhood friend Rachel, but as he soon discovers, this perilous path will put him in the crosshairs of fierce competitors, untrustworthy rivals and terrifying monsters, and he might not make it out alive...",
        "url": "https://en.wikipedia.org/wiki/Tower_of_God#/media/File:Tower_of_God_Volume_1_Cover.jpg"
      },
      {
        "id": 49,
        "name": "Kami Nomi zo Shiru Sekai",
        "alternateName": "The World God Only Knows",
        "description": "Dating sim master Keima Katsuragi wants nothing more than to immerse himself in the 2D world, chasing digital girlfriends. But when the so-called 'Capturing God' answers a mysterious email from an unknown sender, Keima finds himself chasing down real-life ladies in an attempt to help the peppy demon Elsie de Lute Irma capture 'lost souls' escaped from the depths of hell. Now, lest the explosive collar around his neck detonate, Keima must convince various girls to fall in love with him in order to scare out the souls hiding in their hearts.",
        "url": "https://en.wikipedia.org/wiki/The_World_God_Only_Knows#/media/File:TWGOK_manga_vol._1.png"
      },
      {
        "id": 50,
        "name": "Aoashi",
        "alternateName": "",
        "description": "Ashito Aoi is a young, aspiring soccer player from a backwater town in Japan. His hopes of getting into a high school with a good soccer club are dashed when he causes an incident during a critical match for his team, which results in their loss and elimination from the tournament. Nevertheless, he catches the eye of someone important who happened to be visiting from Tokyo. How will things turn out for Ashito?",
        "url": "https://en.wikipedia.org/wiki/The_World_God_Only_Knows#/media/File:TWGOK_manga_vol._1.png"
      },
      {
        "id": 51,
        "name": "Bungo Stray Dogs: BEAST",
        "alternateName": "",
        "description": "Ryunosuke Akutagawa's desperate mission to save his younger sister leads to him being recruited by the armed detective agency! But standing in his way is none other than the fearsome White Reaper of the Port Mafia—Atsushi Nakajima. As darkness and light face off, what fate awaits the two…?",
        "url": "https://en.wikipedia.org/wiki/Bungo_Stray_Dogs#/media/File:Bungō_Stray_Dogs_volume_1.jpg"
      },
      {
        "id": 52,
        "name": "Overlord",
        "alternateName": "",
        "description": "What do you do when your favorite game shuts down? Momonga decided to stay logged in right up until the very end. But when the servers go dark, he finds himself transported into the game world--and he's been transformed into his skeletal avatar from the game, awesome magical powers included! But what if he's the villain of his own story?",
        "url": "https://en.wikipedia.org/wiki/Overlord#/media/File:Bayeux_Tapestry_scene23_Harold_sacramentum_fecit_Willelmo_duci.jpg"
      },
      {
        "id": 53,
        "name": "Fruits Basket",
        "alternateName": "",
        "description": "After a family tragedy turns her life upside down, plucky high schooler Tohru Honda takes matters into her own hands and moves out...into a tent! Unfortunately for her, she pitches her new home on private land belonging to the mysterious Sohma clan, and it isn't long before the owners discover her secret. But, as Tohru quickly finds out when the family offers to take her in, the Sohmas have a secret of their own--when touched by the opposite sex, they turn into the animals of the Chinese Zodiac!",
        "url": "https://en.wikipedia.org/wiki/Fruits_Basket#/media/File:Fruits_Basket_manga.jpg"
      },
      {
        "id": 54,
        "name": "The Savior's Book Cafe Story in Another World",
        "alternateName": "Isekai ni Kyuuseishu toshite Yobaremashita ga, Around Thirty ni wa Muri nano de, Hissori Book Cafe Hajimemashita.",
        "description": "When a “god” tells Tsukina that she is to be transported to another world to become its savior, Tsukina isn’t interested. As a bookish thirty-something, she has zero desire to go on some big adventure…so when she arrives in the strange new land, she decides to use her magical powers to create a cozy little book café instead. But when a fellow “savior” starts causing trouble, Tsukina might just have to play the hero, after all!",
        "url": "https://en.wikipedia.org/wiki/Fruits_Basket#/media/File:Fruits_Basket_manga.jpg"
      },
      {
        "id": 55,
        "name": "Howl's Moving Castle",
        "alternateName": "Howl no Ugoku Shiro",
        "description": "The responsible orphan Sophie led a relatively normal life, safe within the walls of the hat shop in which she works; for outside, it is rumored, the evil wizard Howl roams the land in his mobile black castle. After a chance and mystical encounter, poor Sophie finds herself transformed by a spell which makes her appear to be an old woman, and thus embarks on an adventure to find Howl's castle and put an end to her curse. A mystical world of talking flames, sentient scarecrows and magic aplenty awaits those who seek the legendary Howl...",
        "url": "https://en.wikipedia.org/wiki/Fruits_Basket#/media/File:Fruits_Basket_manga.jpg"
      },
      {
        "id": 56,
        "name": "Saiki Kusuo no Ψ Nan",
        "alternateName": "The Disaster Of PSI Kusuo Saiki, The Disastrous Life of Saiki K.",
        "description": "Kusuo Saiki is a sixteen-year-old high-school student with innate supernatural powers. What are his hassles and troubles triggered by his extraordinary ability? And what misfortunes fall upon him?",
        "url": "https://en.wikipedia.org/wiki/Fruits_Basket#/media/File:Fruits_Basket_manga.jpg"
      },
      {
        "id": 57,
        "name": "A Certain Magical Index: New Testament (Light Novel)",
        "alternateName": "Shinyaku Toaru Majutsu no Index (Light Novel)",
        "description": "The Third World War has been ended by the efforts of Kamijou Touma. With that, he vanished. With the Magic Side regrouping, the Sabbath for their followers has arrived.In the headquarters of the Science Side, Academy City's strongest Level 5 Esper Accelerator has washed his hands off the \"Darkness.\" Along with Last Order and Misaka Worst, his days pass by peacefully with no sign of GROUP. Hamazura Shiage has formed a new ITEM with Kinuhata, Takitsubo and Mugino. Peace has come to the hands of the alumni who have \"graduated\" from Academy's Dark Side at last... at least until a new evil \"first year student\" appears before them. ",
        "url": "https://en.wikipedia.org/wiki/List_of_A_Certain_Magical_Index_characters#/media/File:Index_III.jpg"
      },
      {
        "id": 58,
        "name": "Black Butler",
        "alternateName": "Kuroshitsuji",
        "description": "In Victorian England it is commonplace for the rich and wealthy to have a staff, led by a head butler, to run their households; the Phantomhive Estate is no different. The young and demanding Count Ciel Phantomhive, child owner of a toy company, lives in the grand countryside manor. Sebastian is his head butler, and the epitome of perfection; he effortlessly and gracefully completes his day-to day chores and fixes the countless mistakes of the other employees. However, whilst on the outside all seems prim and proper, a more sinister secret lies just beneath the surface. Sebastian is in fact a demon bound by a contract with the young count; he will loyally serve and fight for him in return for his soul.",
        "url": "https://en.wikipedia.org/wiki/Black_Butler#/media/File:Kuroshitsuji_Volume_1_cover.jpg"
      },
      {
        "id": 59,
        "name": "Assassination Classroom",
        "alternateName": "Ansatsu Kyoushitsu",
        "description": "The students in Class 3-E of Kunugigaoka Junior High have a new teacher: an alien octopus with bizarre powers and unlimited strength, who’s just destroyed the moon and is threatening to destroy the earth—unless they can kill him first! Meet the would-be assassins of class 3-E: Sugino, who let his grades slip and got kicked off the baseball team. Karma, who's doing well in his classes but keeps getting suspended for fighting. And Okuda, who lacks both academic and social skills, yet excels at one subject: chemistry. Who has the best chance of winning that reward? Will the deed be accomplished through pity, brute force or poison...? And what chance does their teacher have of repairing his students' tattered self-esteem?",
        "url": "https://en.wikipedia.org/wiki/Assassination_Classroom#/media/File:Assassination_Classroom_Volume_1.jpg"
      },
      {
        "id": 60,
        "name": "What's Wrong with Secretary Kim?",
        "alternateName": "Kimbiseoga Wae Geureolgga",
        "description": "Handsome, loaded, and arrogant Youngjoon is the VP of a major corporation. Miso has been his perfect secretary, practically legend for surviving her narcissistic boss for 9 long years. But now that she's quitting, is there really nothing -- or no one -- that can stop her from walking away?",
        "url": "https://en.wikipedia.org/wiki/What%27s_Wrong_with_Secretary_Kim#/media/File:What's_Wrong_with_Secretary_Kim.jpg"
      },
      {
        "id": 61,
        "name": "March Comes in Like a Lion",
        "alternateName": "3-gatsu no Lion",
        "description": "Rei Kiriyama is a 17-year-old professional shogi player who suffers from anxiety, depression, and loneliness. Unwanted by his relatives after he loses his family in an accident, and resented by his adopted family's children, Rei moves into his own apartment in Tokyo to avoid inconveniencing others. He uses his talent at shogi to earn a living, but doesn't take care of himself, and is reluctant to ask others for help. Soon after his arrival, the boy meets the Kawamoto family: a trio of sisters and their grandfather who run a traditional Japanese pastry shop. They too have dealt with pain and loss, but their warmth and loving-kindness are balm for Rei's anguished spirit.",
        "url": "https://en.wikipedia.org/wiki/March_Comes_In_like_a_Lion#/media/File:Sangatsu_no_Lion.jpg"
      },
      {
        "id": 62,
        "name": "Attack on Titan: No Regrets",
        "alternateName": "Shingeki no Kyojin Gaiden: Kuinaki Sentaku",
        "description": "The young Erwin Smith is a rising star in the Survey Corps, humanity’s only hope of defeating the man-eating monsters known as Titans. Ruthless and dispassionate, Erwin’s mind is devoted to strategies and intrigue. But beneath Erwin’s feet is another world, the Underground, where humans are born and die surrounded by the garbage the Capital throws away. Here, the criminal Levi survives on his wits and agility. But when these two ambitious men cross paths, who will prove himself stronger?",
        "url": "https://en.wikipedia.org/wiki/Ikki_Tousen#/media/File:Battle_Vixens_vol_1_cover_(Japanese).jpg"
      },
      {
        "id": 63,
        "name": "The Way of the Househusband",
        "alternateName": "Gokushufudou",
        "description": "It’s a day in the life of your average househusband — if your average househusband is the legendary yakuza “the Immortal Dragon”! A former yakuza legend leaves it all behind to become your everyday househusband. But it’s not easy to walk away from the gangster life, and what should be mundane household tasks are anything but! He was the fiercest member of the yakuza, a man who left countless underworld legends in his wake. They called him “the Immortal Dragon.” But one day he walked away from it all to walk another path — the path of the househusband! The curtain rises on this cozy yakuza comedy!",
        "url": "https://en.wikipedia.org/wiki/The_Way_of_the_Househusband#/media/File:The_Way_of_the_Househusband.jpg"
      },
      {
        "id": 64,
        "name": "WorldEnd: What do you do at the end of the world? Are you busy? Will you save us? (Light Novel)",
        "alternateName": "Shuumatsu Nani Shitemasu ka? Isogashii desu ka? Sukutte Moratte Ii desu ka? (Light Novel)",
        "description": "Everyone wants to be remembered... Untold years after the strange Beasts drove humanity to extinction, Willem emerges from his slumber as the sole survivor. A new civilization of various other races has risen on the floating islands, but there's no place for a featureless human among them. After aimlessly wandering for a time, Willem grudgingly accepts a job with the military, only to discover that the \"weapons\" he watches over are in fact young faeries. As he slowly learns more about the children and how they're linked to his past, the war with the Beasts grows increasingly desperate. When the girls prepare to fight a hopeless battle, is there anything a lone human can do...?",
        "url": "https://en.wikipedia.org/wiki/WorldEnd#/media/File:Sukasuka.jpg"
      },
      {
        "id": 65,
        "name": "Dr. Stone",
        "alternateName": "",
        "description": "One fateful day, all of humanity was petrified by a blinding flash of light. After several millennia, high schooler Taiju awakens and finds himself lost in a world of statues. However, he's not alone! His science-loving friend Senku's been up and running for a few months and he's got a grand plan in mind—to kickstart civilization with the power of science!",
        "url": "https://en.wikipedia.org/wiki/WorldEnd#/media/File:Sukasuka.jpg"
      },
      {
        "id": 66,
        "name": "Kimetsu no Yaiba: Rengoku Kyoujurou Gaiden",
        "alternateName": "Kimetsu no Yaiba: Rengoku Kyoujurou Side Story",
        "description": "Since ancient times, rumors have abounded of man-eating demons lurking in the woods. Because of this, the local townsfolk never venture outside at night. Legend has it that a demon slayer also roams the night, hunting down these bloodthirsty demons. Set before the events of the main series, this spinoff tells the story of Rengoku Kyoujurou, an energetic young demon hunter, as he takes over his family’s role as the Flame Pillar.",
        "url": "https://en.wikipedia.org/wiki/WorldEnd#/media/File:Sukasuka.jpg"
      },
      {
        "id": 67,
        "name": "Goblin Slayer Side Story: Year One",
        "alternateName": "Goblin Slayer Gaiden: Year One",
        "description": "Three days after his sister was no more, he finally gained the will to move. In the aftermath of a goblin raid, a lone boy mourned his village, his family. Five years later, he visited a city on the frontier and became an adventurer. It was five years earlier that the boy who had lost a place to call home was reunited with his childhood friend. Despite being the lowest Porcelain rank, the boy readies himself and then sets off alone for a lair of goblins, marking the beginning of the legend of Goblin Slayer! ",
        "url": "https://en.wikipedia.org/wiki/WorldEnd#/media/File:Sukasuka.jpg"
      },
      {
        "id": 68,
        "name": "JoJo's Bizarre Adventure Part 8: Jojolion",
        "alternateName": "Jojo no Kimyou na Bouken: Jojorion",
        "description": "Following the Great East Japan earthquake, Morioh has been stricken by vast earthen protrusions known by the locals as Wall Eyes. Despite investigation, professional estimations are left empty. Meanwhile, the young girl Yasuho Hirose discovers a man buried within the ground, he possesses a distinctive star-shaped birthmark together with deeply penetrating bite marks. The man, who has contracted a staple case of amnesia is taken in by a local family and given the name Jousuke Higashikata, however mysterious events cannot stop from piling one upon the other and soon that enigma known as stand emerges to compliment the great cloud of confusion.",
        "url": "https://en.wikipedia.org/wiki/JoJo%27s_Bizarre_Adventure_(TV_series)#/media/File:JoJo_Part_1_Phantom_Blood.jpg"
      },
      {
        "id": 69,
        "name": "The Irregular at Magic High School (Light Novel)",
        "alternateName": "Mahouka Koukou no Rettousei (Light Novel)",
        "description": "The year is 2095. Magic has been tamed as another form of technology, and the practice of magic is now a rigorous discipline. Brother and sister Tatsuya and Miyuki Shiba are just about to start their first year at the renowned First Magic High School of Japan. But the school's ironclad rules mean that the brilliant Miyuki enters the prestigious Course 1, while her older brother, Tatsuya, is relegated to Course 2--and that's just the beginning of their troubles!",
        "url": "https://en.wikipedia.org/wiki/The_Irregular_at_Magic_High_School#/media/File:Irregular_at_Magic_High_School_LN_1.png"
      },
      {
        "id": 70,
        "name": "Is It Wrong to Try to Pick Up Girls in a Dungeon? (Light Novel)",
        "alternateName": "Dungeon ni Deai wo Motomeru no wa Machigatte Iru Darou ka (Light Novel)",
        "description": "In Orario, fearless adventurers band together in search of fame and fortune within the monstrous underground labyrinth known as Dungeon. But while riches and renown are incentive enough for most, Bell Cranel, would-be hero extraordinaire, has bigger plans. He wants to pick up girls. Is it wrong to face the perils of Dungeon alone, in a single-member guild blessed by a failed goddess? Maybe. Is it wrong to dream of playing hero to hapless maidens in Dungeon? Maybe not. After one misguided adventure, Bell quickly discovers that anything can happen in the labyrinth - even chance encounters with beautiful women. The only problem? He’s the one who winds up the damsel in distress!!",
        "url": "https://en.wikipedia.org/wiki/Is_It_Wrong_to_Try_to_Pick_Up_Girls_in_a_Dungeon%3F#/media/File:DanMachi_light_novel_volume_1_cover.jpg"
      },
      {
        "id": 71,
        "name": "Akatsuki no Yona (Light Novel)",
        "alternateName": "Yona of the Dawn (Light Novel)",
        "description": "When listening to a nostalgic voice in the crowd of people, Soo-Won looked back without thinking. However, it was not the girl of his memory...",
        "url": "https://en.wikipedia.org/wiki/Day_Break_Illusion#/media/File:GeneiTaiyouTitle.jpg"
      },
      {
        "id": 72,
        "name": "How to Keep a Mummy",
        "alternateName": "Miira no Kaikata",
        "description": "When high school student Sora Kashiwagi finds himself staring down a mysterious oversized package sent to him by his self-proclaimed \"adventurer\" father, the last thing he expects is for it to be opened from the inside... by a little mummy so small it can fit in the palm of his hand!",
        "url": "https://en.wikipedia.org/wiki/Day_Break_Illusion#/media/File:GeneiTaiyouTitle.jpg"
      },
      {
        "id": 73,
        "name": "Food Wars! Shokugeki no Souma",
        "alternateName": "Shokugeki no Souma",
        "description": "Soma Yukihira's old man runs a small family restaurant in the less savory end of town.  Aiming to one day surpass his father's culinary prowess, Soma hones his skills day in and day out until one day, out of the blue, his father decides to enroll Soma in a classy culinary school!  Can Soma really cut it in a school that prides itself on a 10 percent graduation rate? And can he convince the beautiful, domineering heiress of the school that he belongs there at all?!",
        "url": "https://en.wikipedia.org/wiki/Food_Wars!:_Shokugeki_no_Soma#/media/File:Shokugeki_no_Souma_Volume_1.jpg"
      },
      {
        "id": 74,
        "name": "your name.",
        "alternateName": "Kimi no Na wa.",
        "description": "Mitsuha, a high school girl living in a rural town deep in the mountains, has a dream that she is a boy living an unfamiliar life in Tokyo. Taki, a high school boy living in Tokyo, dreams that he is a girl living in the mountains. As they realize they are changing places, their encounter sets the cogs of fate into motion.",
        "url": "https://en.wikipedia.org/wiki/Your_Name#/media/File:Your_Name_poster.png"
      },
      {
        "id": 75,
        "name": "Toradora! (Light Novel)",
        "alternateName": "",
        "description": "Ryuuji Takasu has an eventful life: his classmates think he's a delinquent due to his 'killer' eyes; his crush Minori seems ever out of reach; and he’s just had an unfortunate encounter with 'palm-sized Taiga' – a feisty and dainty wench in his class. With different cleaning habits and tempers, the two clash like night and day; that is, except for the fact that Taiga and Ryuuji have crushes on the other's good friend! With school rumors abounding, the duo must now work together to play matchmaker for each other. Who will end up with their true love?",
        "url": "https://upload.wikimedia.org/wikipedia/en/c/cd/Toradora%21_light_novel_volume_1_cover.jpg"
      },
      {
        "id": 76,
        "name": "Rascal Does Not Dream Series (Light Novel)",
        "alternateName": "Seishun Buta Yarou Series (Light Novel)",
        "description": "Bunny girls do not live in libraries. This is simply common sense. And yet, that's exactly where Sakuta runs into one in the wild. More bewildering is who the bunny girl is: Mai Sakurajima, an older student who attends the same school and is a well-known actress currently on break from industry work. Wanting to find out more about the mystery surrounding Mai and maybe get a little closer to her in the process, Sakuta launches an investigation to figure out what's causing this bunny girl to be invisible and unnoticed by everyone around them.",
        "url": "https://en.wikipedia.org/wiki/Rascal_Does_Not_Dream_of_Bunny_Girl_Senpai#/media/File:Seishun_Buta_Yarō_light_novel_volume_1_cover.jpg"
      },
      {
        "id": 77,
        "name": "Dragon Ball Z",
        "alternateName": "",
        "description": "Son Goku is the greatest hero on Earth. Five years after defeating the demon king Piccolo, he's grown up and had a family--he's married, and he has a child, Son Gohan. But what is the real reason for Goku's incredible strength? A visitor from outer space arrives bearing terrible news--Goku is an alien, and the visitor, Raditz, is Goku's brother! When Raditz turns out to be a ruthless killer, Goku must fight his incredibly strong brother to save his family and the entire human race. A surprising alliance may be Earth's last hope: Goku will team up with his old enemy Piccolo...archenemies united to save the world!",
        "url": "https://en.wikipedia.org/wiki/Dragon_Ball_Z#/media/File:Dragon_Ball_Z_Logo.png"
      },
      {
        "id": 78,
        "name": "Eyeshield 21",
        "alternateName": "",
        "description": "Ever since Sena was little, everyone has treated him as an errand boy. His childhood friend, Mamori, even has to protect him from bullies all the time, although she's a girl. Fortunately, in order to evade his tormentors, Sena has developed incredibly fast legs; in fact, Sena is so fast that he is noticed by Himura, the quarterback of a failing football team, who promptly tricks him into joining. However, in order to keep other teams from scouting him, and to keep Mamori from finding out that he's in such a dangerous sport, Sena wears an eyeshield and goes by the name of \"Eyeshield 21\". For someone like Sena, making it in the tough world of football is a challenge like no other, but also the once-in-a-lifetime chance to become someone others respect!",
        "url": "https://en.wikipedia.org/wiki/Eyeshield_21#/media/File:Vol_1_-_The_Boy_With_the_Golden_Legs.jpg"
      },
      {
        "id": 79,
        "name": "Snow White with the Red Hair",
        "alternateName": "Akagami no Shirayuki-hime",
        "description": "Shirayuki is a spunky pharmacist with bright, apple-red hair unlike anything anyone has ever seen. Even the prince of the kingdom she lives in is entranced by her locks, and demands that she become his concubine. Not wanting to be viewed as an object prized purely for its novelty, Shirayuki flees civilization and heads towards the forest. Here, the girl meets the charming Zen, who rescues her from Prince Raji's clutches and reveals that he is a prince as well. The two become close friends, and Shirayuki decides to return to Zen's castle with him, to pursue her dreams. But becoming a palace pharmacist isn't easy, especially since her unusual hair color and close relationship with the prince tend to draw unwanted attention...",
        "url": "https://en.wikipedia.org/wiki/Snow_White_with_the_Red_Hair#/media/File:Akagami_no_Shirayukihime_volume_1_cover.jpg"
      },
      {
        "id": 80,
        "name": "A Certain Magical Index (Light Novel)",
        "alternateName": "Toaru Majutsu no Index (Light Novel)",
        "description": "Touma Kamijo's right hand has the ability to nullify any form of supernatural power, whether it be magical, psychic, or divine; he lives in a city populated by students with these powers. Yet unfortunately for Touma, his arm also seems to nullify good luck. Despite his bad luck, the boy tries to stay out of trouble and just live out his life, trying to be the \"good guy\" whenever he can; but trouble enters his life one day when he finds a young girl hanging on his balcony. She turns out to be a nun of the Church of England, bearing the Index-Librorum-Prohibitorum - a collection of 103,000 forbidden texts, and as a result has a number of people after her. How far will Touma go to protect his new companion from her pursuers?",
        "url": "https://en.wikipedia.org/wiki/List_of_A_Certain_Magical_Index_characters#/media/File:Index_III.jpg"
      },
      {
        "id": 81,
        "name": "Beelzebub",
        "alternateName": "",
        "description": "Ishiyama High is home to a whole host of delinquents, including Oga, a legendary badass who's downright devilish. One day Oga finds a man floating down a river, after which the man splits open to reveal a baby inside – but it’s no ordinary baby! The cute tot is actually Beelzebub, the future king of the demons! And as Oga is as mean as they come, Beelzebub latches on to its newfound 'father', much to the other demons' dismay. Now, in addition to battling rival gangs and becoming the strongest delinquent around, Oga must buy diapers, comfort and carry around an annoying baby who's more of a devil than he is!",
        "url": "https://en.wikipedia.org/wiki/Beelzebub#/media/File:Beelzebub_and_them_with_him.jpg"
      },
      {
        "id": 82,
        "name": "Kaiju No. 8",
        "alternateName": "Monster #8",
        "description": "With the highest kaiju-emergence rates in the world, Japan is no stranger to attack by deadly monsters. Enter the Japan Defense Force, a military organization tasked with the neutralization of kaiju. Kafka Hibino, a kaiju-corpse cleanup man, has always dreamed of joining the force. But when he gets another shot at achieving his childhood dream, he undergoes an unexpected transformation. How can he fight kaiju now that he’s become one himself?!",
        "url": "https://en.wikipedia.org/wiki/Kaiju_No._8#/media/File:Kaiju_No_8.jpg"
      },
      {
        "id": 83,
        "name": "Genshin Impact",
        "alternateName": "",
        "description": "Aeons ago, the elder elemental gods granted civilization to the human race, but the world soon splintered as corruption and greed grew without check. Can the forces holding this world together be balanced against human desires, or is everything ultimately doomed to end in destruction?",
        "url": "https://en.wikipedia.org/wiki/Kaiju_No._8#/media/File:Kaiju_No_8.jpg"
      },
      {
        "id": 84,
        "name": "Overlord: The Vampire Princess of the Lost Country (Light Novel)",
        "alternateName": "Overlord: Boukoku no Kyuuketsuhime (Light Novel)",
        "description": "When Momonga had enough of sitting idly by as the online game YGGDRASIL was about to be permanently shut down, he made the final decision to celebrate the end of the game in style. He flies off to a small little island in the Grenbera Swamp and sets up 5000 fireworks to explode and burst into the sky. While blinded by the brilliant flash of light, Suzuki notices that his surroundings have changed from a swamp to a ruined city. Unable to determine his situation and exact location, Suzuki decides to patiently explore his new surroundings.",
        "url": "https://upload.wikimedia.org/wikipedia/en/9/9f/Overlord_light_novel_characters.jpg"
      },
      {
        "id": 85,
        "name": "Toilet-Bound Hanako-kun 0",
        "alternateName": "Jibaku Shounen Hanako-kun 0",
        "description": "The origin of AidaIro’s masterpiece!  Toilet-bound Hanako-kun was originally published in  Monthly GFantasy as a self-contained short series, and you can read those three chapters here along with AidaIro’s debut work, “The Beloved Living Dead.” Come and see where it all began!",
        "url": "https://en.wikipedia.org/wiki/Toilet-Bound_Hanako-kun#/media/File:Toilet-Bound_Hanako-kun_volume_1_cover.jpg"
      },
      {
        "id": 86,
        "name": "Parasyte",
        "alternateName": "Kiseijuu",
        "description": "In secret, alien parasites drift downwards toward Earth. Their directive: to take control of a human body and thrive in secret. When a parasite attempts to take over Shinji, an ordinary high school student, he stops it in his arm to save his mind. With the strange power of amorphous muscle, the curious parasite strikes an uneasy truce with Shinji: it will keep him alive and strong so that it may continue living, and will help protect him from the other parasites that might not take kindly to Shinji's mind still actively working. Can Shinji gain the courage to face the parasites and protect humanity? And would it even make a difference if he did?",
        "url": "https://en.wikipedia.org/wiki/Parasyte#/media/File:Kiseiju_volume_4.jpg"
      },
      {
        "id": 87,
        "name": "By the Grace of the Gods",
        "alternateName": "Kamitachi ni Hirowareta Otoko",
        "description": "Slime's up for one recently deceased middle-aged businessman! When the gods reincarnate him in another world as a boy with magical powers, he discovers that magically-tamed slime are an untapped natural resource! Upon his sudden death, middle-aged otaku businessman Ryoma Takebayashi finds himself in a curious situation. Three gods request his cooperation in their divine plot, which requires him to reincarnate in another world as a young boy! Equipped with magic, young Ryoma undertakes a carefree existence in the forest, leisurely learning more about his new abilities and surroundings. And when he encounters slimes like those in video games from his former life, Ryoma uses his newfound magical powers to get creative with his research! Will the gods get more than they bargained for in Ryoma?!",
        "url": "https://en.wikipedia.org/wiki/By_the_Grace_of_the_Gods#/media/File:By_the_Grace_of_the_Gods_light_novel_volume_1_cover.jpg"
      },
      {
        "id": 88,
        "name": "Taisho Otome Otogibanashi",
        "alternateName": "Taisho Maiden Fairytale",
        "description": "In this story set in the early 1920s, Tamahiko is the son of a wealthy family, but his life is changed forever when an accident cripples his right arm. No longer considered by his father as an heir, he is shuffled off into the country, to live out of sight. The teenage Tamahiko shuts himself in his new home, bitterly thinking of it as the place where he will die. One day, he learns that his father has 'bought' him a bride to take care of him, when the young teen girl named Yuzuki arrives at his door. She comes into his life like an innocent ray of sunshine, and Tamahiko's view of the world and his life starts changing bit-by-bit.",
        "url": "https://en.wikipedia.org/wiki/Taisho_Otome_Fairy_Tale#/media/File:Taishō_Otome_Otogi_Banashi_volume_1_cover.jpg"
      },
      {
        "id": 89,
        "name": "Sword Art Online: Progressive (Light Novel)",
        "alternateName": "",
        "description": "One month after Akihiko Kayaba’s game of death began, the death toll continues to rise, two thousand players having already lost their lives to the ultra-difficult VRMMO world of Sword Art Online. On the day of the strategy meeting to plan out the first-floor boss battle, Kirito, a solo player who vows to fight alone to get stronger, runs into a rare, high-level female player. She gracefully dispatches powerful monsters with a single rapier that flashes like a shooting star in the night…",
        "url": "https://en.wikipedia.org/wiki/Sword_Art_Online_Progressive:_Aria_of_a_Starless_Night#/media/File:Aria_Of_A_Starless_Night_poster.jpg"
      },
      {
        "id": 90,
        "name": "JoJo's Bizarre Adventure Part 2: Battle Tendency",
        "alternateName": "JoJo no Kimyou na Bouken Part 2: Sentou Chuuryuu",
        "description": "Many years have passed since Jonathan Joestar stood up to the evil forces of Dio. Now, in the present, Joseph, Jonathan's grandson, lives with his grandmother Erina and has the occasional scuffle with a thug. But after the pair is informed that Erina's long lost friend Robert E. O. Speedwagon has been murdered, Joseph finds himself in the midst of an ongoing battle with the most powerful of foes: Santana, ACDC, Cars and Wham, four ancient warriors who have been resurrected by the Nazis for their own nefarious purposes!",
        "url": "https://en.wikipedia.org/wiki/Battle_Tendency#/media/File:Jojo8.jpg"
      },
      {
        "id": 91,
        "name": "Neon Genesis Evangelion",
        "alternateName": "Shin Seiki Evangelion",
        "description": "It is the year 2015, and Tokyo-3 is under attack by the Angels. With fifteen years of relative peace disrupted, mankind faces its toughest enemy. Summoned by his father to NERV headquarters, Shinji Ikari finds himself tasked with having to pilot an Evangelion - a powerful weapon which is humanity's only chance of defeating the Angels. As well as having to shoulder the burden of protecting a city, Shinji must struggle with school, his father and his fellow pilots as well as himself. But will he even be able to survive his first encounter against the enemy?",
        "url": "https://en.wikipedia.org/wiki/Neon_Genesis_Evangelion#/media/File:Evangelion_retouched.png"
      },
      {
        "id": 92,
        "name": "Tokyo Ghoul:re",
        "alternateName": "Tokyo Kushu:re",
        "description": "Haise Sasaki has been tasked with teaching Qs Squad how to be outstanding investigators, but his assignment is complicated by the troublesome personalities of his students and his own uncertain grasp of his Ghoul powers. Can he pull them together as a team, or will Qs Squad first assignment be their last?",
        "url": "https://en.wikipedia.org/wiki/Tokyo_Ghoul#/media/File:Tokyo_Ghoul_volume_1_cover.jpg"
      },
      {
        "id": 93,
        "name": "My Dress-Up Darling",
        "alternateName": "Sono Bisque Doll wa Koi wo Suru",
        "description": "Traumatized by a childhood incident with a friend who took exception to his love of traditional dolls, doll-artisan hopeful Wakana Gojou passes his days as a loner, finding solace in the home ec room at his high school. To Wakana, people like beautiful Marin Kitagawa, a trendy girl who's always surrounded by a throng of friends, is practically an alien from another world. But when cheerful Marin--never one to be shy--spots Wakana sewing away one day after school, she barges in with the aim of roping her quiet classmante into her secret hobby: cosplay! Will Wakana's wounded heart be able to handle the invasion from this sexy alien?!",
        "url": "https://en.wikipedia.org/wiki/My_Dress-Up_Darling#/media/File:Sono_Bisque_Doll_wa_Koi_wo_Suru,_Volume_1.jpg"
      },
      {
        "id": 94,
        "name": "Sword Art Online (Light Novel)",
        "alternateName": "",
        "description": "The year is 2022, and gamers have lined up on launch day to connect to Sword Art Online, a hotly anticipated MMORPG that allows players to connect to an immersive, lush virtual reality world with special helmets called Nerve Gear. Kirito is eager to return to the place where he spent a good deal of time as a beta tester, and quickly becomes friends with Klein, a newbie player. But soon, Sword Art Online's 10,000 players discover that not only are they unable to logout, the only way they can return to their physical bodies is by beating the 100-level tower's final boss - that is, if their HP doesn't drop to zero first, for death in the game means death in the real world. Now, with no one else to turn to, Kirito and the other participants must survive the game as best they can – some forming guilds, others ruthlessly leaving their peers behind, and many tragically falling by the wayside or to the merciless monsters populating the lands...",
        "url": "https://en.wikipedia.org/wiki/Sword_Art_Online#/media/File:Sword_Art_Online_light_novel_volume_1_cover.jpg"
      },
      {
        "id": 95,
        "name": "Tsuredure Children",
        "alternateName": "Wakabayashi Toshiya's 4-koma Collection",
        "description": "This manga is for those of you who just can't seem to say, \"I love you.\" Toshiya Wakabayashi's acclaimed school-romance is jam-packed with frustration, embarrassment, and awkwardness!",
        "url": "https://en.wikipedia.org/wiki/Tsuredure_Children#/media/File:TsureChiru_vol.1.jpg"
      },
      {
        "id": 96,
        "name": "Dragon Ball",
        "alternateName": "",
        "description": "Meet a naive young monkey-tailed boy named Goku, whose quiet life changes when he meets Bulma, a girl who is on a quest to collect seven \"Dragon Balls.\" If she gathers them all, an incredibly powerful dragon will appear and grant her one wish. But the precious orbs are scattered all over the world, and Bulma needs Goku's help (and his super-strength)! With a magic staff for a weapon and a flying cloud for a ride, Goku sets out on the adventure of a lifetime…",
        "url": "https://en.wikipedia.org/wiki/Dragon_Ball#/media/File:Dragon_Ball_manga_1st_Japanese_edition_logo.svg"
      },
      {
        "id": 97,
        "name": "JoJo's Bizarre Adventure Part 3: Stardust Crusaders",
        "alternateName": "JoJo no Kimyou na Bouken Part 3: Stardust Crusaders",
        "description": "In a Japanese jail sits 17-year-old Jotaro Kujo: punk, fighter, delinquent...and possessed by a force beyond his control! Around the world, evil spirits are awakening: \"Stands,\" monstrous invisible creatures which give their bearers incredible powers. To save his mother's life, Jotaro must tame his dark forces and travel around the world to Cairo, Egypt, where a hundred-year-old vampire thirsts for the blood of his family. But the road is long, and an army of evil Stand Users waits to kill JoJo and his friends...",
        "url": "https://en.wikipedia.org/wiki/JoJo%27s_Bizarre_Adventure_(TV_series)#/media/File:JoJo_Part_1_Phantom_Blood.jpg"
      },
      {
        "id": 98,
        "name": "Kokou no Hito",
        "alternateName": "The Climber",
        "description": "Mori Buntaro transfers to Yokosuka North High School and wants nothing more than to be alone, even going so far as to ignore his teachers and brazenly skip class. But when Hajime Miyamoto challenges him to climb the school building as a form of hazing, Mori feels alive for the first time in years. Awakened to the thrill of rock climbing, he pursues his goal to reach to the sky, but can he learn to work in tandem with others, or will he be forever seeking the heights alone?",
        "url": "https://en.wikipedia.org/wiki/Kokou_no_Hito#/media/File:Kokou_no_Hito_v1_cover.jpg"
      },
      {
        "id": 99,
        "name": "Bungo Stray Dogs: Wan!",
        "alternateName": "",
        "description": "From the pages of Bungo Stray Dogs comes a new series about the peaceful everyday lives of the cast-Only now the Armed Detective Agency and Mafia characters are mini-sized?! This cozy gag manga about the cute adventures of Atsushi and crew brings a different charm from the original! ",
        "url": "https://en.wikipedia.org/wiki/Bungo_Stray_Dogs#/media/File:Bungō_Stray_Dogs_volume_1.jpg"
      },
      {
        "id": 100,
        "name": "Magi",
        "alternateName": "Magi: Labyrinth of Magic",
        "description": "In a sand-swept land of caravans, brigands and adventurers, legends tell of the ominous dungeon towers that suddenly appeared 14 years ago. It's said that by clearing one of these prisons, you can obtain treasure beyond your wildest dreams, and even form a contract with magical genies of immense power - assuming you make it out alive. In this world, Alibaba is a young rogue who wants nothing more than to get rich by clearing all of the world's dungeons, starting with the nearby tower Amon; Aladdin is a curious young boy with a magical flute and a hidden ability; and Morgiana is a slave who can't escape her chains. As their fates intertwine, the three find themselves wandering the land, battling powerful enemies, and taking a stand against powerful forces that seek to corrupt the weak and innocent.",
        "url": "https://en.wikipedia.org/wiki/Magi:_The_Labyrinth_of_Magic#/media/File:MagiCover01.png"
      }

]);
/*useEffect(()=>{
  const fetchData = async()=>{
    const result =await axios.get('http://localhost:5000/api/wishlists')
    setPeoples(result.data)
  }
  fetchData()

},[])*/

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState();
  const fun = () => {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('search');
    peoples.map(people=>{
      if(product===people.name){
        a="/category/"+people.id;
      
        
      }
    })
    
    
    
  };
  /*
  const handleClick=()=>{
    const search1={search};
   fetch("http://localhost:8080/manga_list/search",{
     method:"POST",
     headers:{"Content-Type:":"application/json"},
     body: JSON.stringtify(search1)
   }).then(res=>{
    
   })
  }
  */ 
  useEffect(()=>{
    
    history(a)
    
  },[a])
return (
    
    <div className="header">
      {backButtons?(
          <div>
           <ArrowBackIcon  onClick={()=>history(backButtons)} className='header_icon' fontSize='large'/>
          
          </div>
          

          
        ):(
          <div className="header1 flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
           
      
      <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
      <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
        </div>
            {toggleSidebar && (
        <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="absolute w-full flex justify-end items-center p-2">
            <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
          </div>
          <Sidebar closeToggle={setToggleSidebar} user={user && user} />
        </div>
           
        )}

  <form class="search_manga" action="">
  <input type="text" placeholder="Search Your Manga" id="manga" name="search"/>
  <button onClick={fun()} ><SearchIcon className='header_icon' fontSize='large'/></button>
  
</form>

<Link to='/category/Profile'>

<IconButton>

  <PersonIcon className='header_icon' fontSize='large'/>
</IconButton>
</Link>
</div>
)}
</div>
)
}

export default Header