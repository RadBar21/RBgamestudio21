import { Language } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  cs: {
    nav: {
      openMenu: 'Otevřít menu',
    },
    home: {
      heroTitle1: 'Budoucnost mobilních her',
      heroTitle2: 'poháněná AI',
      heroDesc: 'Vítejte v RB Game Studio 21. Jsem Radek Bartoníček, nezávislý vývojář, který spojuje kreativitu s umělou inteligencí k vytvoření jedinečných herních zážitků.',
      ctaPortfolio: 'Zobrazit hry',
      ctaContact: 'Kontaktujte mě',
      featureSoloTitle: 'Solo Development',
      featureSoloDesc: 'Jako "One Man Show" vkládám do každého projektu osobní přístup. Od prvního řádku kódu až po finální design – vše prochází mýma rukama.',
      featureAiTitle: 'AI Asistence',
      featureAiDesc: 'Využívám nejmodernější AI nástroje pro generování assetů, optimalizaci kódu a vytváření dynamických herních mechanik, které by jinak nebyly možné.',
      featureMobileTitle: 'Mobilní Fokus',
      featureMobileDesc: 'Specializuji se na hry pro mobilní platformy. Cílem je přinést zábavu do vaší kapsy, ať už jste kdekoliv. Jednoduché ovládání, hluboký zážitek.',
      ctaBottomTitle: 'Připraveni hrát?',
      ctaBottomDesc: 'Prohlédněte si mé portfolio a stáhněte si nejnovější tituly přímo do vašeho telefonu.',
      ctaBottomLink: 'Přejít do portfolia',
    },
    portfolio: {
      title: 'Moje Hry',
      subtitle: 'Prozkoumejte kolekci her vytvořených s vášní a pomocí umělé inteligence.',
      download: 'Stáhnout',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      statusComingSoon: 'Připravuje se',
      moreInfo: 'Více informací',
      emptyState: 'Zatím zde nejsou žádné hry. Brzy přibudou!',
      // Nové překlady pro modální okno
      modalTitle: 'Připravuje se',
      modalDescription: 'Uvedení této hry na tuto platformu pro vás připravuji.',
      modalBack: 'Zpět',
    },
    contact: {
      title: 'Kontaktujte mě',
      subtitle: 'Máte nápad na hru? Našli jste chybu? Nebo jen chcete pozdravit?',
      cardInfoTitle: 'Kontaktní informace',
      role: 'Vývojář',
      email: 'Email',
      location: 'Lokalita',
      locationValue: 'Česká republika',
      cardCollabTitle: 'Spolupráce',
      cardCollabDesc: 'Jsem otevřený zpětné vazbě a novým nápadům. I když pracuji jako solo vývojář, rád si vyslechnu názory komunity hráčů.',
    },
    privacy: {
      title: 'Zásady ochrany osobních údajů',
      lead: 'Vaše soukromí je pro RB Game Studio 21 prioritou. Tento dokument vysvětluje, jak přistupujeme k vašim datům v našich hrách a službách.',
      
      introTitle: '1. Úvod',
      introText: 'Radek Bartoníček vytvořil tuto aplikaci jako aplikaci podporovanou reklamou. Tato SLUŽBA je poskytována Radkem Bartoníčkem bezplatně a je určena k použití tak, jak je. Tato stránka slouží k informování návštěvníků o mých zásadách týkajících se shromažďování, používání a zveřejňování osobních údajů, pokud se někdo rozhodne používat moji Službu. Pokud se rozhodnete používat moji Službu, souhlasíte se shromažďováním a používáním informací v souvislosti s těmito zásadami. Osobní údaje, které shromažďuji, se používají k poskytování a zlepšování Služby. Vaše informace nebudu používat ani sdílet s nikým jiným, než jak je popsáno v těchto Zásadách ochrany osobních údajů.',
      
      infoCollectionTitle: 'Shromažďování a používání informací',
      infoCollectionText: 'Pro lepší zážitek při používání naší Služby mohu vyžadovat, abyste nám poskytli určité osobně identifikovatelné informace. Informace, které požaduji, budou uchovány ve vašem zařízení (uloženy lokálně pomocí nativních preferencí) a nejsou mnou žádným způsobem shromažďovány na žádném externím serveru. Aplikace využívá služby třetích stran, které mohou shromažďovat informace používané k vaší identifikaci (např. reklamní ID).',
      
      thirdPartyServicesTitle: 'Odkaz na zásady ochrany osobních údajů poskytovatelů služeb třetích stran používaných aplikací:',
      
      gdprTitle: 'Soulad s GDPR (Evropská unie)',
      gdprText: 'Pokud jste rezidentem Evropského hospodářského prostoru (EHP), máte určitá práva na ochranu údajů. Vzhledem k tomu, že vaše osobní údaje neukládám na své servery (veškerý herní postup a měna jsou uloženy lokálně ve vašem zařízení), máte nad svými údaji plnou kontrolu. Pokud jde o reklamy třetích stran, dbám na to, aby reklamní partneři (jako Google AdMob) dodržovali GDPR. Při spuštění aplikace se vám může zobrazit formulář souhlasu s přijetím nebo odmítnutím personalizované reklamy.',
      
      ccpaTitle: 'Soulad s CCPA (USA - Kalifornie)',
      ccpaText: 'Podle Kalifornského zákona o ochraně soukromí spotřebitelů (CCPA) mají obyvatelé Kalifornie právo požadovat přístup ke svým osobním údajům a jejich vymazání. Vzhledem k tomu, že vaše osobní údaje neprodávám ani je neukládám na servery, požadavky týkající se prodeje údajů se neuplatňují v tradičním smyslu. Svá lokální data můžete spravovat vymazáním úložiště aplikace v nastavení zařízení.',
      
      logDataTitle: 'Data protokolu (Log Data)',
      logDataText: 'Chci vás informovat, že kdykoli použijete moji Službu, v případě chyby v aplikaci shromažďuji data a informace (prostřednictvím produktů třetích stran) ve vašem telefonu zvané Log Data. Tato data protokolu mohou zahrnovat informace, jako je adresa internetového protokolu („IP“) vašeho zařízení, název zařízení, verze operačního systému, konfigurace aplikace při používání mé Služby, čas a datum vašeho použití Služby a další statistiky.',
      
      cookiesTitle: 'Cookies',
      cookiesText: 'Cookies jsou soubory s malým množstvím dat, které se běžně používají jako anonymní jedinečné identifikátory. Ty jsou odesílány do vašeho prohlížeče z webových stránek, které navštívíte, a jsou uloženy ve vnitřní paměti vašeho zařízení. Tato Služba tyto „cookies“ explicitně nepoužívá. Aplikace však může používat kód a knihovny třetích stran, které používají „cookies“ ke shromažďování informací a zlepšování svých služeb. Máte možnost tyto soubory cookie buď přijmout, nebo odmítnout a vědět, kdy je soubor cookie odesílán do vašeho zařízení. Pokud se rozhodnete odmítnout naše soubory cookie, možná nebudete moci používat některé části této Služby.',
      
      securityTitle: 'Bezpečnost',
      securityText: 'Vážím si vaší důvěry při poskytování vašich osobních údajů, proto se snažíme používat komerčně přijatelné prostředky k jejich ochraně. Pamatujte však, že žádný způsob přenosu přes internet ani způsob elektronického ukládání není 100% bezpečný a spolehlivý a nemohu zaručit jeho absolutní bezpečnost.',
      
      childrenTitle: 'Ochrana soukromí dětí',
      childrenText: 'Tyto Služby nejsou určeny pro nikoho mladšího 13 let. Vědomě neshromažďuji osobně identifikovatelné informace od dětí mladších 13 let. V případě, že zjistím, že mi dítě mladší 13 let poskytlo osobní údaje, okamžitě je vymažu z našich serverů. Pokud jste rodič nebo opatrovník a víte, že nám vaše dítě poskytlo osobní údaje, kontaktujte mě, abych mohl provést nezbytné kroky.',
      
      changesTitle: 'Změny těchto Zásad ochrany osobních údajů',
      changesText: 'Naše Zásady ochrany osobních údajů mohu čas od času aktualizovat. Doporučujeme vám proto tuto stránku pravidelně kontrolovat kvůli případným změnám. O jakýchkoli změnách vás budu informovat zveřejněním nových Zásad ochrany osobních údajů na této stránce.',
      
      contactTitle: 'Kontaktujte nás',
      contactText: 'Máte-li jakékoli dotazy nebo návrhy týkající se mých Zásad ochrany osobních údajů, neváhejte mě kontaktovat na RBgamestudio21@gmail.com.',
    },
    footer: {
      rights: 'Všechna práva vyhrazena.',
    },
  },
  en: {
    nav: {
      openMenu: 'Open menu',
    },
    home: {
      heroTitle1: 'The Future of Mobile Gaming',
      heroTitle2: 'Powered by AI',
      heroDesc: 'Welcome to RB Game Studio 21. I am Radek Bartoníček, an indie developer combining creativity with artificial intelligence to create unique gaming experiences.',
      ctaPortfolio: 'View Games',
      ctaContact: 'Contact Me',
      featureSoloTitle: 'Solo Development',
      featureSoloDesc: 'As a "One Man Show," I put a personal touch into every project. From the first line of code to the final design – everything goes through my hands.',
      featureAiTitle: 'AI Assistance',
      featureAiDesc: 'I use cutting-edge AI tools to generate assets, optimize code, and create dynamic game mechanics that wouldn\'t be possible otherwise.',
      featureMobileTitle: 'Mobile Focus',
      featureMobileDesc: 'I specialize in mobile platform games. The goal is to bring entertainment to your pocket, wherever you are. Simple controls, deep experience.',
      ctaBottomTitle: 'Ready to Play?',
      ctaBottomDesc: 'Check out my portfolio and download the latest titles directly to your phone.',
      ctaBottomLink: 'Go to Portfolio',
    },
    portfolio: {
      title: 'My Games',
      subtitle: 'Explore a collection of games created with passion and artificial intelligence.',
      download: 'Download',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      statusComingSoon: 'Coming Soon',
      moreInfo: 'More Info',
      emptyState: 'No games here yet. Coming soon!',
      // New translations for modal
      modalTitle: 'Coming Soon',
      modalDescription: 'I am preparing the release of this game on this platform for you.',
      modalBack: 'Back',
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Have a game idea? Found a bug? Or just want to say hi?',
      cardInfoTitle: 'Contact Information',
      role: 'Developer',
      email: 'Email',
      location: 'Location',
      locationValue: 'Czech Republic',
      cardCollabTitle: 'Collaboration',
      cardCollabDesc: 'I am open to feedback and new ideas. Even though I work as a solo developer, I love hearing opinions from the gaming community.',
    },
    privacy: {
      title: 'Privacy Policy',
      lead: 'Your privacy is a priority for RB Game Studio 21. This document explains how we handle your data in our games and services.',
      
      introTitle: '1. Introduction',
      introText: 'Radek Bartoníček built this game app as an Ad Supported app. This SERVICE is provided by Radek Bartoníček at no cost and is intended for use as is. This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service. If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.',
      
      infoCollectionTitle: 'Information Collection and Use',
      infoCollectionText: 'For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device (stored locally using native preferences) and is not collected by me on any external server in any way. The app does use third-party services that may collect information used to identify you (e.g., Advertising ID).',
      
      thirdPartyServicesTitle: 'Link to privacy policy of third-party service providers used by the app:',
      
      gdprTitle: 'GDPR Compliance (European Union)',
      gdprText: 'If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Since I do not store your personal data on my servers (all game progress and currency are stored locally on your device), you have full control over your data. Regarding third-party ads, I ensure that advertising partners (like Google AdMob) comply with GDPR. When launching the app, you may be presented with a consent form to accept or decline personalized advertising.',
      
      ccpaTitle: 'CCPA Compliance (US - California)',
      ccpaText: 'Under the California Consumer Privacy Act (CCPA), California residents have the right to request access to and deletion of their personal data. As I do not sell your personal data and do not store it on servers, requirements regarding the sale of data do not apply in the traditional sense. You can manage your local data by clearing the app\'s storage in your device settings.',
      
      logDataTitle: 'Log Data',
      logDataText: 'I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.',
      
      cookiesTitle: 'Cookies',
      cookiesText: 'Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device\'s internal memory. This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.',
      
      securityTitle: 'Security',
      securityText: 'I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.',
      
      childrenTitle: 'Children’s Privacy',
      childrenText: 'These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.',
      
      changesTitle: 'Changes to This Privacy Policy',
      changesText: 'I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.',
      
      contactTitle: 'Contact Us',
      contactText: 'If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at RBgamestudio21@gmail.com.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};