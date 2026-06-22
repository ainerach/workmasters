import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const investorTrack = await prisma.track.upsert({
    where: { name: 'Investor' },
    update: {},
    create: { name: 'Investor', description: 'Build an asset-backed portfolio while scaling personal productivity.' }
  });

  const freelancerTrack = await prisma.track.upsert({
    where: { name: 'Freelancer' },
    update: {},
    create: { name: 'Freelancer', description: 'Master client acquisition, output consistency, and premium service delivery.' }
  });

  const entrepreneurTrack = await prisma.track.upsert({
    where: { name: 'Entrepreneur' },
    update: {},
    create: { name: 'Entrepreneur', description: 'Scale business systems and revenue through disciplined execution and leadership.' }
  });

  const shamis = await prisma.user.upsert({
    where: { email: 'shamis@workmasters.com' },
    update: {},
    create: {
      email: 'shamis@workmasters.com',
      name: 'Shamis',
      role: 'PARTICIPANT',
      profile: {
        create: {
          phone: '+1 415 555 0183',
          gender: 'Female',
          occupation: 'Creative Founder',
          incomeSource: 'Client projects, digital offers',
          monthlyIncome: '$9,200',
          trackId: freelancerTrack.id,
          goalStatement: 'Secure consistent high-value clients while building scalable systems.',
          challenge: 'Maintaining energy and focus across revenue generation and content delivery.',
          visionStatement: 'Lead a network of brands that support my creative growth, financial freedom, and impact.',
          progress: 54,
          revenueGenerated: 19200,
          clientsOnboarded: 8,
          sessionsAttended: 14,
          goalsAchieved: 5
        }
      }
    }
  });

  await prisma.user.upsert({
    where: { email: 'mentor@workmasters.com' },
    update: {},
    create: {
      email: 'mentor@workmasters.com',
      name: 'Mentor',
      password: 'mentor123',
      role: 'MENTOR'
    }
  });

  await prisma.user.upsert({
    where: { email: 'admin@workmasters.com' },
    update: {},
    create: {
      email: 'admin@workmasters.com',
      name: 'Admin',
      password: 'admin123',
      role: 'ADMIN'
    }
  });

  const participants = [
    { name: 'Aaliyah', track: entrepreneurTrack, incomeSource: 'product sales', monthlyIncome: '$11,300' },
    { name: 'Kofi', track: investorTrack, incomeSource: 'portfolio income', monthlyIncome: '$7,800' },
    { name: 'Nia', track: freelancerTrack, incomeSource: 'consulting', monthlyIncome: '$8,900' },
    { name: 'Omar', track: entrepreneurTrack, incomeSource: 'coaching programs', monthlyIncome: '$13,400' },
    { name: 'Maya', track: investorTrack, incomeSource: 'rental yield', monthlyIncome: '$6,200' },
    { name: 'Jade', track: freelancerTrack, incomeSource: 'design retainers', monthlyIncome: '$9,000' },
    { name: 'Ethan', track: entrepreneurTrack, incomeSource: 'subscription service', monthlyIncome: '$10,700' },
    { name: 'Mina', track: investorTrack, incomeSource: 'commodity trading', monthlyIncome: '$8,100' },
    { name: 'Ravi', track: freelancerTrack, incomeSource: 'development contracts', monthlyIncome: '$12,000' },
    { name: 'Sana', track: entrepreneurTrack, incomeSource: 'brand launches', monthlyIncome: '$14,500' }
  ];

  for (const participant of participants) {
    await prisma.user.upsert({
      where: { email: `${participant.name.toLowerCase()}@workmasters.com` },
      update: {},
      create: {
        email: `${participant.name.toLowerCase()}@workmasters.com`,
        name: participant.name,
        role: 'PARTICIPANT',
        profile: {
          create: {
            phone: '+1 415 555 01' + Math.floor(Math.random() * 90 + 10),
            gender: 'Prefer not to say',
            occupation: 'Program participant',
            incomeSource: participant.incomeSource,
            monthlyIncome: participant.monthlyIncome,
            trackId: participant.track.id,
            goalStatement: 'Advance program outcomes with consistent progress and accountability.',
            challenge: 'Balancing growth habits with urgent client and investment priorities.',
            visionStatement: 'Expand influence, simplify revenue, and build a stronger portfolio.',
            progress: Math.floor(35 + Math.random() * 45),
            revenueGenerated: 8200 + Math.floor(Math.random() * 8200),
            clientsOnboarded: 3 + Math.floor(Math.random() * 5),
            sessionsAttended: 8 + Math.floor(Math.random() * 7),
            goalsAchieved: 2 + Math.floor(Math.random() * 4)
          }
        }
      }
    });
  }

  const sessions = [
    {
      title: 'Investment Must Be Personal',
      date: new Date('2026-04-08'),
      highlight:
        'Investment is not simply about making money. Successful investment should align with personal interests, values, natural strengths, and long-term vision. The group explored the Wealth Triangle: you make money, your business makes money, and your assets make money.',
      status: 'COMPLETED'
    },
    {
      title: 'From Household to Homestead',
      date: new Date('2026-04-15'),
      highlight:
        'The session explored the difference between a household and a homestead. A household focuses on consumption, while a homestead focuses on production, systems, income generation, assets, and multiplying resources.',
      status: 'COMPLETED'
    },
    {
      title: 'Self-Discovery',
      date: new Date('2026-04-22'),
      highlight:
        'Members reflected on Origin, Identity, and Potential. The session emphasized Be → Do → Have: first become the right person, then do the right work, and finally obtain the desired results.',
      status: 'COMPLETED'
    }
  ];

  for (const session of sessions) {
    await prisma.session.create({
      data: {
        title: session.title,
        date: session.date,
        highlight: session.highlight,
        status: session.status
      }
    });
  }

  await prisma.resource.createMany({
    data: [
      { category: 'Tools', title: 'Productivity Blueprint', description: 'A practical framework for weekly planning and execution.', link: '#' },
      { category: 'Tools', title: 'Weekly Execution Dashboard', description: 'A tracker crafted for progress, focus, and outcomes.', link: '#' },
      { category: 'Tools', title: 'Investment Calculator', description: 'Estimate the capital needed to reach your target by December 2026.', link: '#' },
      { category: 'Tools', title: 'Vision Planning Tool', description: 'Map your six-month vision with clarity and momentum.', link: '#' },
      { category: 'Masterclasses', title: 'Offer Design Template', description: 'Structure high-value offers that convert for clients and partners.', link: '#' },
      { category: 'Masterclasses', title: 'Financial Discipline Tracker', description: 'A scorecard for disciplined spending, savings, and capital allocation.', link: '#' }
    ]
  });

  await prisma.mentor.createMany({
    data: [
      { name: 'Arielle Mason', specialty: 'Business Growth', bio: 'Guides founders to sharpen offers, client acquisition, and scaled revenue.' },
      { name: 'Daniel Osei', specialty: 'Investment Strategy', bio: 'Supports members in building asset portfolios and responsible capital allocation.' }
    ]
  });

  await prisma.pod.create({
    data: {
      name: 'Pod Alpha',
      focus: 'Accountability for revenue and investment goals',
      meetingDate: new Date('2026-07-01'),
      progress: 68,
      members: {
        create: [
          { name: 'Shamis' },
          { name: 'Aaliyah' },
          { name: 'Kofi' }
        ]
      }
    }
  });

  console.log('Seed data created');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
