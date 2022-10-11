// import instagram from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"
import youtube from "../../images/youtube_footer.svg"
import instagram from '../../images/instagram.svg'

const plans = [
    {
        plan: "Product",
        link: "/product"
    },
    {
        plan: "Customer Services",
        link: "/services"
    },
    {
        plan: "Pricing",
        link: "/pricing"
    },
    {
        plan: "About",
        link: "/about"
    },
    {
        plan: "Support",
        link: "/support"
    },
  ]

  const teams = [
    {
        team: "Creative Agencies",
        link: "/creative"
    },
    {
        team: "Consultancies",
        link: "/consultancy"
    },
    {
        team: "Implementation Terms",
        link: "/implementation-terms"
    }
  ]


  const usefulLinks = [
    {
        page: "Blog",
        link: "/blog"
    },
    {
        page: "Terms of Use",
        link: "/terms"
    },
    {
        page: "Privacy Policy",
        link: "/policies"
    }
  ]

  const socialMedias = [
    {
        image: instagram,
        link: "https:www.instagram.com"
    },
    {
        image: twitter,
        link: "https:www.twitter.com"
    },
    {
        image: youtube,
        link: "https:www.youtube.com"
    }
  ]

  const data = {plans, teams, usefulLinks, socialMedias}

  export default data