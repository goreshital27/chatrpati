import { useState, useEffect } from 'react';

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(targetMonth: number = 5, targetDay: number = 6): TimeLeft {
  // June is month index 5 (0-indexed)
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    let currentYear = now.getFullYear();
    let target = new Date(currentYear, targetMonth, targetDay, 0, 0, 0);

    // If target has passed this year, count to next year
    if (now.getTime() > target.getTime()) {
      target = new Date(currentYear + 1, targetMonth, targetDay, 0, 0, 0);
    }

    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetMonth, targetDay]);

  return timeLeft;
}

