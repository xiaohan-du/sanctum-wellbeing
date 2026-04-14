import ladyCream from '../images/ladyCream.png';
import asian from '../images/asian.png';
import handFeet from '../images/handfeet.jpg';
import foot from '../images/foot.png';
import backHands from '../images/backHands.png';
import sportsMassage from '../images/sportsMassage.jpeg';
import hotStone from '../images/hotStone.png';
import lymphatic from '../images/lymphatic.png';
import whiteSheet from '../images/whiteSheet.png';
import greyCream from '../images/greyCream.png';

export const priceCardData = [
  {
    title: 'Bliss Aromatherapy Facial',
    tiers: [
      {
        label: 'Bliss Facial Aromatherapy',
        time: '1 hour',
        price: '£70',
      },
      {
        label: 'Bliss Facial Aromatherapy IHM',
        time: '1 hour 30 mins',
        price: '£95',
      },
      {
        label: 'Sheer Bliss Package IHM Reflex',
        time: '2 hours',
        price: '£130',
      },
    ],
    imgUrl: ladyCream,
    description: [
      'Immerse yourself in a rejuvenating journey with our Bliss Facial Aromatherapy. This luxurious 60-minute treatment is expertly crafted for your unique skin needs, using bespoke aromatherapy blends and massage with relaxation at the heart of the experience.',
      'Longer options build in Indian head massage techniques and reflexology where listed — see each duration above.',
    ],
  },
  {
    title: 'Indian Head Massage 60 minutes',
    tiers: [{ time: '1 hour', price: '£60' }],
    imgUrl: asian,
    description: [
      'An ancient therapeutic practice focusing on acupressure points on the head, neck, and shoulders. At Sanctum Wellbeing this includes the full back, neck, shoulders, arms, face, and head, performed while you relax on a heated massage bed with oils — leaving you in a calmer, more grounded state.',
    ],
  },
  {
    title: 'Reflexology',
    tiers: [
      { label: 'Reflexology hands 30 mins', time: '30 mins', price: '£40' },
      { label: 'Reflexology feet 30 mins', time: '30 mins', price: '£40' },
      { label: 'Reflexology feet 60 mins', time: '1 hour', price: '£60' },
      { label: 'Reflexology hands & feet 60 min', time: '1 hour', price: '£60' },
    ],
    imgUrl: handFeet,
    description: [
      'Reflexology is a complementary health therapy used to encourage relaxation and wellbeing. Pressure is applied to reflex points on the feet and/or hands to support balance and calm.',
    ],
  },
  {
    title: 'Thai Foot Massage',
    tiers: [
      { time: '30 mins', price: '£40' },
      { time: '1 hour', price: '£60' },
    ],
    imgUrl: foot,
    description: [
      'A holistic practice with roots in Ayurvedic medicine and yoga, combining reflexology and acupressure on the feet and lower legs to open energy channels, ease muscular discomfort, and leave you both invigorated and relaxed.',
    ],
  },
  {
    title: 'Full Body Massage',
    tiers: [
      { label: 'Full Body Massage', time: '1 hour', price: '£75' },
      { label: 'Full Body Massage', time: '1 hour 30 mins', price: '£110' },
      {
        label: 'Full Body Massage with Feet Reflexology',
        time: '2 hours',
        price: '£135',
      },
    ],
    imgUrl: backHands,
    description: [
      'Ease away aching muscles and slip into relaxation with a full body massage tailored to your needs on the day — from gentle to firm pressure.',
      'The 2-hour option includes feet reflexology.',
    ],
  },
  {
    title: 'Sanctum Sports Massage',
    tiers: [
      { label: 'Sanctum Sports Massage', time: '30 mins', price: '£40' },
      { label: 'Sanctum Sports Massage', time: '1 hour', price: '£75' },
      { label: 'Sports Massage', time: '1 hour 30 mins', price: '£110' },
      { label: 'Sanctum Sports Package', time: '2 hours', price: '£135' },
    ],
    imgUrl: sportsMassage,
    description: [
      'Designed to help you reach peak performance, reduce the risk of injury, and accelerate recovery. Bespoke pre- and post-event massage, and maintenance massage tailored to you.',
      'The 90-minute option is deep tissue work on the areas that need it most — can be combined with reflexology or Indian head massage for a restorative finish.',
      'The 2-hour package is 90 minutes of deep tissue for your most tense areas, followed by 30 minutes of reflexology or Indian head massage — ideal after hard training or events.',
    ],
  },
  {
    title: 'Sanctum Hot Stones Massage Therapy',
    tiers: [
      { label: 'Sanctum Hot Stones Massage Therapy', time: '1 hour', price: '£75' },
      { label: 'Sanctum Hot Stone Massage', time: '1 hour 30 mins', price: '£110' },
      {
        label: 'Sanctum Hot Stones Body & Sole Package',
        time: '2 hours',
        price: '£135',
      },
    ],
    imgUrl: hotStone,
    description: [
      'Full-body massage with heated stones to ease stress, tension, and achy muscles and restore calm. The 2-hour Body & Sole package includes feet reflexology.',
    ],
  },
  {
    title: 'Sanctum Lymphatic Reset',
    tiers: [
      {
        label: 'Sanctum Lymphatic Reset',
        time: '1 hour 30 mins',
        price: '£120',
      },
      {
        label: 'Targeted Lymphatic Sculpt',
        time: '45 mins',
        price: '£65',
      },
      {
        label: 'Facial Lymphatic Drainage & Indian Head Techniques',
        time: '45 mins',
        price: '£65',
      },
    ],
    imgUrl: lymphatic,
    description: [
      'Recommended for first-time clients: a 90-minute full-body sculpting treatment using specialised wooden tools.',
      'Targeted Lymphatic Sculpt: focused lymphatic drainage for specific areas (abdomen, hips/thighs, lower legs/feet, facial, or arms).',
      'Facial session: techniques to reduce puffiness and promote relaxation in the head, face, neck, and décolletage using Maderotherapy and cryo spoons.',
    ],
  },
  {
    title: 'The Bespoke 2 hour package',
    tiers: [{ time: '2 hours', price: '£140' }],
    imgUrl: whiteSheet,
    description: [
      'A bespoke 2-hour treatment tailored to your needs on the day. Choose from Indian Head Massage, full back, neck, shoulders, face, head, arms, hands, and feet reflexology. Have it all, skip some parts, or mix it up depending on how you feel — or relax and let Louise take the lead.',
      'Complimentary face mask and foot scrub offered.',
    ],
  },
  {
    title: 'Sanctum Pregnancy Massage Pre or Post Natal',
    tiers: [
      {
        label: 'Sanctum Pregnancy Massage Pre or Post Natal',
        time: '1 hour',
        price: '£75',
      },
      {
        label: 'Sanctum Pre or Post Natal Pamper Package',
        time: '1 hour 30 mins',
        price: '£110',
      },
    ],
    imgUrl: greyCream,
    description: [
      'Gentle, supportive massage tailored for pregnancy and postpartum.',
      'The 90-minute pamper package includes a restorative massage to ease pain and tension, a complimentary face mask, and your choice of Indian Head Massage or reflexology with a rejuvenating foot scrub.',
    ],
  },
];
