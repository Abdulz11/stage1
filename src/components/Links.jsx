

export default function () {
    const slackUserName = "JustAbdul"
  return (
    <div className='link-container'>
      <a  id='twitter' href="https://www.twitter.com/@abdul_oyewale">
          Twitter Link
      </a>
      <a  id='btn__zuri' href="https://training.zuri.team/">
          Zuri Team
      </a>
      <a id='books' href="https://books.zuri.team" title='Find books about design and coding here'>
      Zuri Books
      </a>
      <a id='book__python' href={`https://books.zuri.team/python-for-beginners?ref_id=${slackUserName}`} title='Get the python-for-beginners to help start your journey as a  python programmer for only $4.99'> Python Books
      </a>
      <a  id='pitch' href="https://background.zuri.team" title='Find out who your team members really are with  background check for coders'>
        Background Check for Coders
      </a>
      <a id='book__design' href="https://books.zuri.team/design-rules" title=' Get the ultimate design rules  book from zuri for FREE'>
          Design Boooks
      </a>
      <a id='contact' href="/contact" >
          Contact Me
      </a>
    </div>
  )
}
