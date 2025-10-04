"use client";

function getOrdinal(day: number) {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1: return `${day}st`;
    case 2: return `${day}nd`;
    case 3: return `${day}rd`;
    default: return `${day}th`;
  }
}

export default function ReminderHeading() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const weekday = now.toLocaleString('default', { weekday: 'long' });
    const dateStr = `${getOrdinal(day)} ${month}, ${year}`;
    const timeStr = `${weekday}, ${now.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', hour12: true })}`;

    return <div>
        <span className="text-[#FADED3] font-oxanium text-[2rem]">{dateStr}</span>
        <br />
        <span className="text-[#9D716A] font-oxanium text-[1.75rem]">{timeStr}</span>
    </div>
}