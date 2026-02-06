import TipSection from '../components/TipSection'
import './Tips.css'

function Tips() {
  return (
    <div className="tips-page">
      <header className="tips-header">
        <h1>Desert Travel Tips 🧳</h1>
        <p className="tips-intro">
          Essential advice for navigating the Sahara with confidence and comfort.
          Tap any section to expand and discover practical wisdom for your desert adventure.
        </p>
      </header>

      <div className="tips-sections">
        {/* Camel Riding Tips */}
        <TipSection icon="🐫" title="Camel Riding Tips" defaultOpen={true}>
          <p>
            Riding a camel is one of the most memorable parts of your desert experience.
            Here's what you need to know to stay safe and comfortable:
          </p>

          <h3>Mounting & Dismounting</h3>
          <ul>
            <li>
              <strong>Hold on tight!</strong> When the camel stands up or sits down, it moves
              in stages - back legs first, then front legs. Lean back when standing up, lean
              forward when sitting down.
            </li>
            <li>
              The camel will make a groaning sound - this is completely normal and doesn't
              mean it's in pain or angry.
            </li>
            <li>
              Wait for your guide's signal before mounting or dismounting. Never try to get
              on or off while the camel is standing.
            </li>
          </ul>

          <h3>Riding Posture & Comfort</h3>
          <ul>
            <li>
              <strong>Sit upright</strong> and hold onto the saddle's handle. Relax your hips
              and move with the camel's swaying motion.
            </li>
            <li>
              <strong>They're taller than expected!</strong> Camels can be 6-7 feet tall when
              standing. Don't panic - you'll get used to the height quickly.
            </li>
            <li>
              The rocking motion can feel strange at first. Try to stay relaxed and avoid
              tensing up, which can lead to soreness.
            </li>
            <li>
              If you feel uncomfortable at any point, communicate with your guide. They can
              adjust the pace or stop for a break.
            </li>
          </ul>

          <h3>Important Reminders</h3>
          <ul>
            <li>
              <strong>Trust your guide.</strong> Camels respond to their handlers - don't try
              to control the camel yourself.
            </li>
            <li>
              Camels can be stubborn and have strong personalities. If yours stops to rest or
              refuses to move, be patient - the guide will handle it.
            </li>
            <li>
              Bring a camera but keep it secure. Dropping something from camel-height means
              it's likely gone forever in the sand!
            </li>
            <li>
              Yes, they can be smelly and a bit grumpy, but they're also gentle, lovable
              creatures. Show them respect and patience.
            </li>
          </ul>
        </TipSection>

        {/* Desert Packing Essentials */}
        <TipSection icon="🎒" title="Desert Packing Essentials">
          <p>
            Pack smart for extreme temperature swings and desert conditions. The Sahara can be
            40°C+ during the day and drop near freezing at night!
          </p>

          <h3>Clothing</h3>
          <ul>
            <li>
              <strong>Layers are essential!</strong> Lightweight, breathable clothes for day
              (long sleeves for sun protection), warm jacket/fleece for night.
            </li>
            <li>
              Long, loose clothing made from natural fibers (cotton, linen) keeps you cool
              and protects from the sun.
            </li>
            <li>
              A head scarf or shemagh (traditional desert wrap) is invaluable - protects from
              sun, sand, and wind. Your guide can show you how to wrap it.
            </li>
            <li>
              Comfortable, closed-toe shoes (sneakers or light hiking boots). Sand gets
              everywhere - avoid sandals unless for camp only.
            </li>
            <li>
              Extra socks! Sand in your shoes is inevitable, and fresh socks make a huge
              difference.
            </li>
          </ul>

          <h3>Sun Protection</h3>
          <ul>
            <li>
              <strong>SPF 50+ sunscreen</strong> - The desert sun is intense. Reapply every
              2 hours, especially on face, neck, and hands.
            </li>
            <li>
              UV-protection sunglasses with straps or retainers (so they don't blow away or
              fall off the camel).
            </li>
            <li>
              Wide-brimmed hat or cap for extra shade. A light-colored hat reflects heat better.
            </li>
            <li>
              Lip balm with SPF - Your lips will thank you. The dry desert air is harsh.
            </li>
          </ul>

          <h3>Other Essentials</h3>
          <ul>
            <li>
              <strong>Water bottle</strong> - Stay hydrated constantly, even when you don't
              feel thirsty.
            </li>
            <li>
              <strong>Extra camera/phone batteries</strong> - No electricity in the desert!
              Bring a portable charger if you have one, but don't count on charging opportunities.
            </li>
            <li>
              Wet wipes and hand sanitizer - Showers are rare in desert camps. These are
              lifesavers for staying fresh.
            </li>
            <li>
              Small flashlight or headlamp - Essential for nighttime bathroom trips and
              stargazing. Bring extra batteries.
            </li>
            <li>
              Tissues/toilet paper - Always have some with you. Not all facilities are well-stocked.
            </li>
            <li>
              Small backpack for day trips - Keep essentials accessible during camel rides.
            </li>
          </ul>
        </TipSection>

        {/* Safety & Comfort */}
        <TipSection icon="🌞" title="Safety & Comfort">
          <h3>Sun Safety</h3>
          <ul>
            <li>
              <strong>Reapply sunscreen frequently</strong> - Every 2 hours minimum, more if
              you're sweating. Don't forget ears, back of neck, and tops of feet.
            </li>
            <li>
              Seek shade during peak sun hours (12pm-3pm) when possible. The sun is strongest
              midday.
            </li>
            <li>
              Know the signs of heat exhaustion: dizziness, nausea, excessive sweating, rapid
              heartbeat. Alert your guide immediately if you experience these.
            </li>
            <li>
              Wear your hat and sunglasses at all times during the day, even on cloudy days.
            </li>
          </ul>

          <h3>Hydration</h3>
          <ul>
            <li>
              <strong>Drink water regularly</strong> - Even if you don't feel thirsty! Aim for
              3-4 liters per day in the desert.
            </li>
            <li>
              Avoid alcohol as it dehydrates you. Save celebratory drinks for after you're
              back from the desert.
            </li>
            <li>
              Your body loses water faster than you realize in dry heat. If your urine is dark
              yellow, drink more water.
            </li>
          </ul>

          <h3>Sand Management</h3>
          <ul>
            <li>
              <strong>Keep electronics in sealed plastic bags</strong> - Sand is incredibly
              fine and gets into everything. Protect your phone, camera, and chargers.
            </li>
            <li>
              Close all tent and bag zippers immediately. An open zipper is an invitation for
              sand invasion.
            </li>
            <li>
              Shake out shoes, clothing, and sleeping bag before use. Sand accumulates in the
              most unexpected places.
            </li>
            <li>
              If sand gets in your eyes, don't rub! Blink repeatedly and let tears wash it out,
              or rinse with clean water.
            </li>
          </ul>

          <h3>Night Warmth</h3>
          <ul>
            <li>
              <strong>The desert gets COLD at night</strong> - Temperatures can drop 40°C+
              from day to night. Be prepared!
            </li>
            <li>
              Bring a warm jacket or fleece layer for evening and nighttime. You'll need it
              for stargazing.
            </li>
            <li>
              Sleeping bags are usually provided by tour companies, but bring extra warm socks
              and maybe a beanie.
            </li>
            <li>
              The temperature drops quickly after sunset. Layer up before you get cold.
            </li>
          </ul>
        </TipSection>

        {/* Cultural Etiquette */}
        <TipSection icon="🙏" title="Cultural Etiquette">
          <p>
            Morocco is a Muslim country with rich cultural traditions. Showing respect for
            local customs enhances your experience and builds wonderful connections with the
            people you meet.
          </p>

          <h3>Photography</h3>
          <ul>
            <li>
              <strong>Always ask before photographing people</strong> - A simple gesture asking
              permission goes a long way. Many people are happy to be photographed once asked.
            </li>
            <li>
              Offer to share photos via email or WhatsApp. Many locals love seeing pictures of
              themselves and their families.
            </li>
            <li>
              Be especially respectful when photographing women and children. Some may decline,
              and that's completely okay.
            </li>
            <li>
              Avoid photographing military installations, police, or government buildings.
            </li>
          </ul>

          <h3>Dress Code</h3>
          <ul>
            <li>
              <strong>Dress modestly</strong> - Cover shoulders and knees, especially when
              visiting villages or interacting with locals.
            </li>
            <li>
              In tourist areas and desert camps, dress codes are more relaxed, but modest
              clothing is still appreciated.
            </li>
            <li>
              In rural and conservative areas, women should consider covering hair with a scarf.
              It shows cultural respect.
            </li>
            <li>
              Long, loose clothing isn't just culturally appropriate - it also protects you from
              the sun!
            </li>
          </ul>

          <h3>Useful Arabic Phrases</h3>
          <div className="phrase-box">
            <strong>"As-salaam alaikum" (اَلسَّلَامُ عَلَيْكُمْ)</strong>
            <em>Peace be upon you - Traditional Islamic greeting</em>
          </div>

          <div className="phrase-box">
            <strong>"Wa alaikum salaam" (وَعَلَيْكُمُ ٱلسَّلَامُ)</strong>
            <em>And upon you, peace - Response to the greeting above</em>
          </div>

          <div className="phrase-box">
            <strong>"Shukran" (شُكْرًا)</strong>
            <em>Thank you</em>
          </div>

          <div className="phrase-box">
            <strong>"Marhaba" (مَرْحَبًا)</strong>
            <em>Hello / Welcome</em>
          </div>

          <div className="phrase-box">
            <strong>"Afak" (عَفَاكْ)</strong>
            <em>Please / Excuse me</em>
          </div>

          <div className="phrase-box">
            <strong>"La, shukran" (لَا، شُكْرًا)</strong>
            <em>No, thank you - Polite way to decline</em>
          </div>

          <div className="phrase-box">
            <strong>"Inshallah" (إِنْ شَاءَ ٱللَّٰهُ)</strong>
            <em>God willing / If Allah wills - Used when discussing future plans</em>
          </div>

          <h3>Bargaining in Souks (Markets)</h3>
          <ul>
            <li>
              <strong>Bargaining is expected and part of the culture</strong> - Don't feel bad
              about negotiating. It's actually expected!
            </li>
            <li>
              Start at around 50% of the asking price and work your way up. The vendor will
              work their way down.
            </li>
            <li>
              Stay friendly and respectful. Smile, joke, and enjoy the interaction. Bargaining
              should be fun, not confrontational.
            </li>
            <li>
              If the price is too high and you can't reach an agreement, politely walk away.
              Vendors will often call you back with a better offer!
            </li>
            <li>
              Once you agree on a price, you're expected to buy. Don't negotiate if you're not
              seriously interested.
            </li>
          </ul>

          <h3>Hospitality Customs</h3>
          <ul>
            <li>
              <strong>Accept tea when offered</strong> - Moroccan mint tea is a symbol of
              hospitality. Refusing can be seen as rude unless you have a valid reason.
            </li>
            <li>
              Use your right hand for eating, greeting, and giving/receiving items. The left
              hand is considered unclean in Islamic culture.
            </li>
            <li>
              Remove your shoes when entering homes or certain indoor spaces. Follow your host's
              lead.
            </li>
            <li>
              If invited to share a meal, wait for your host to begin eating before you start.
            </li>
            <li>
              Small gifts from your home country are appreciated if you're invited to someone's
              home.
            </li>
          </ul>
        </TipSection>

        {/* Desert Survival Pro Tips */}
        <TipSection icon="🏜️" title="Desert Survival Pro Tips">
          <ul>
            <li>
              <strong>Follow your guide's instructions</strong> - They know the desert and its
              dangers. Their advice could save your life.
            </li>
            <li>
              Stay with your group at all times. The desert is vast and featureless - it's
              incredibly easy to get disoriented.
            </li>
            <li>
              Don't wander off alone, even for "just a few minutes." What seems close can be
              much farther than it appears.
            </li>
            <li>
              Respect the desert environment - leave no trace. Pack out all trash, don't disturb
              wildlife or plants.
            </li>
            <li>
              If you see any wildlife (snakes, scorpions), don't approach or touch. Admire from
              a safe distance.
            </li>
            <li>
              Conserve your phone battery - reception is limited or nonexistent in the desert.
              Use airplane mode to save power.
            </li>
            <li>
              Listen to your body. If you feel unwell, dizzy, or exhausted, speak up immediately.
              Don't try to "tough it out."
            </li>
            <li>
              The desert is beautiful but unforgiving. Stay alert, stay hydrated, and stay safe!
            </li>
          </ul>
        </TipSection>
      </div>

      <div className="tips-footer">
        <p>
          Have an amazing desert adventure! These tips will help you stay safe, comfortable,
          and culturally respectful throughout your journey. 🌟
        </p>
      </div>
    </div>
  )
}

export default Tips
