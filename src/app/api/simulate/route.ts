import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { systemId, input } = await req.json();

    // Mock delay for simulation
    await new Promise(resolve => setTimeout(resolve, 2000));

    let output = '';
    let steps: string[] = [];

    if (systemId === 'prd-gen') {
      output = `PRD for "${input || 'New Product Idea'}" successfully generated. Includes Market Analysis, User Personas, and Phase 1 Roadmap.`;
      steps = ['Extracting Intent', 'Fetching Market Data', 'Competitor Analysis', 'Synthesizing PRD'];
    } else if (systemId === 'stock-analyzer') {
      output = `Bullish thesis for ${input || 'AAPL'}. Target price +15%. Sentiment score: 8.2/10. Real-time indicators showing strong buy volume.`;
      steps = ['Fetching Financials', 'Sentiment Analysis', 'Volume Analysis', 'Investment Thesis'];
    }

    return NextResponse.json({ 
      success: true, 
      output,
      steps
    });
  } catch (error) {
    console.error('Simulation error:', error);
    return NextResponse.json({ success: false, error: 'Simulation failed' }, { status: 500 });
  }
}
